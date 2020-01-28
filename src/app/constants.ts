export const CONSTANTS = {
	invalidCrossSiteSameShiftError : {
		severity: 'error',
		summary: 'Incorrect Assignment',
		detail: 'User cannot be assigned on same shift for cross site'
	},
	auditRequestProps: [
		'user_id',
		'attendance',
		'ot',
		'cross_ot',
		'grooming_failure',
		'beard',
		'uniform',
		'shoes',
		'socks',
		'accessories',
		'hair_cut',
		'idf',
		'comments',
		'adhoc'
	],
	callReportingColumns: [
		{ field: 'reset', header: 'Reset', width: '100px', show: true },
		{ field: 'role', header: 'Role', width: '200px', show: true },
		{ field: 'name', header: 'Name', width: '200px', show: true },
		{ field: 'user_id', header: 'User ID', width: '200px', show: true },
		{ field: 'attendance', header: 'Attendance', width: '100px', show: true },
		{ field: 'beard', header: 'Beard', width: '100px', show: true },
		{ field: 'uniform', header: 'Uniform', width: '100px', show: true },
		{ field: 'shoes', header: 'Shoes', width: '100px', show: true },
		{ field: 'socks', header: 'Socks', width: '100px', show: true },
		{ field: 'accessories', header: 'Accessories', width: '100px', show: true },
		{ field: 'hair_cut', header: 'Haircut', width: '100px', show: true },
		{ field: 'idf', header: 'ID Failure', width: '100px', show: true },
		{ field: 'comments', header: 'Comments', width: '200px', show: true }
	],
	callReportingAdhocColumns: [
		{ field: 'reset', header: 'Reset', width: '100px', show: true },
		{ field: 'role', header: 'Role', width: '200px', show: true },
		{ field: 'assigned_role', header: 'Assigned Role', width: '200px', show: true },
		{ field: 'name', header: 'Name', width: '200px', show: true },
		{ field: 'user_id', header: 'User ID', width: '200px', show: true },
		{ field: 'attendance', header: 'Attendance', width: '100px', show: true },
		{ field: 'beard', header: 'Beard', width: '100px', show: true },
		{ field: 'uniform', header: 'Uniform', width: '100px', show: true },
		{ field: 'shoes', header: 'Shoes', width: '100px', show: true },
		{ field: 'socks', header: 'Socks', width: '100px', show: true },
		{ field: 'accessories', header: 'Accessories', width: '100px', show: true },
		{ field: 'hair_cut', header: 'Haircut', width: '100px', show: true },
		{ field: 'idf', header: 'ID Failure', width: '100px', show: true },
		{ field: 'comments', header: 'Comments', width: '200px', show: true }
	]
};