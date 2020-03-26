import { Component, OnInit, Host } from '@angular/core';
import { CONSTANTS } from '@app/constants';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserAuditReportService } from '@app/_services/user-audit-report.service';
import { range } from 'lodash';
import { format } from 'date-fns';
import { AppComponent } from '@app/app.component';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.scss']
})
export class ViewReportComponent implements OnInit {
	private gridApi;
  private gridColumnApi;
	cols: Array<any> = [];
	maxDate: Date;
	reportSearchForm: FormGroup;
	reportSearchFormSubscriber: any;
	startDate: Date = null;
	endDate: Date = null;
	reports: Array<any> = [];
	maxShifts: Array<number> = [];
  constructor(
		private fb: FormBuilder,
		private userAuditReportService: UserAuditReportService,
		@Host() private appComponent: AppComponent
	) { }

  ngOnInit() {
		this.appComponent.pageTitle = 'Report Viewer';
		this.cols = CONSTANTS.viewReportColumns;
		this.cols[0].valueFormatter = this.dateFormatter;
		this.maxDate = new Date();
		this.initFormGroup();
	}
	
	initFormGroup() {
		this.reportSearchForm = this.fb.group({
			startDate: new FormControl(this.startDate || '', Validators.required),
			endDate: new FormControl(this.endDate || '', Validators.required),
		});
		this.reportSearchFormSubscriber = this.reportSearchForm.valueChanges.subscribe(data => {
			this.startDate = data.startDate;
			this.endDate = data.endDate;
			if (this.reportSearchForm.valid) {
				this.userAuditReportService.viewReport({
					startDate: this.startDate,
					endDate: this.endDate
				}).subscribe((data: any) => {
					this.maxShifts = [];
					if (data.maxShift) {
						range(1, data.maxShift + 1).forEach(x => {
							this.cols.push({
								headerName: 'Shift ' + x,
								headerCellClass: 'text-center',
								children: [
									{
										field: 'ot_s' + x,
										headerName: 'OT',
										filter: 'agNumberColumnFilter',
										cellStyle: function(params) {
											if (params.value > 0) {
												return { 'background-color': 'yellow',
																'color': 'white' };
											}
										},
									},
									{
										field: 'cross_ot_s' + x,
										headerName: 'Cross OT',
										filter: 'agNumberColumnFilter',
										cellStyle: function(params) {
											if (params.value > 0) {
												return { 'background-color': 'lightblue',
																'color': 'white' };
											}
										},
									},
									{
										field: 'grooming_failure_s' + x,
										headerName: 'GF',
										filter: 'agNumberColumnFilter',
										cellStyle: function(params) {
											if (params.value > 0) {
												return { 'background-color': 'lightcoral',
																'color': 'white' };
											}
										},
									},
									{
										field: 'idf_s' + x,
										headerName: 'ID Failure',
										filter: 'agNumberColumnFilter',
										cellStyle: function(params) {
											if (params.value > 0) {
												return { 'background-color': 'lightcyan',
																'color': 'white' };
											}
										},
									}
								]
							});
							this.maxShifts.push(x);
						});
						this.reports = data.result;
						this.gridApi.setColumnDefs(this.cols);
						// this.gridApi.refreshCells({ force: true });
					}
				});
			} else {
			}
		});
	}

	dateFormatter(params) {
		return format(new Date(params.value), "MM/dd/yyyy");
	}

	onGridReady(params) {
    this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
		// this.gridApi.refreshCells({ force: true });
	}

}