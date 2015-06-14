var template = {
	
	tplTabs: [
		'   <div class="info-wrapper">',
		'	<ul class="list-group">',
		'		<li class="list-group-item 0">Full name</li>',
		'		<li class="list-group-item 1">Person\'s data</li>',
		'		<li class="list-group-item 2">Passport</li>',
		'	</ul>',
		'	<div class="full-list"></div>',
		'	<button class="btn btn-default">Preview</button>',
		'</div>'].join(''),

	tplPartialInfo:  [
		'		<ul>',
		'		<% for (var key in collection) { %>',
		'			<li class="alert alert-success">',
		'				<%= collection[key]%>',
		'			</li>',
		'		<% } %>',
		'		</ul>'].join(''),

	tplFullList: [
	'		<ul>',
	'		<% for (var key in collection) { %>',
	'			<li class="alert alert-success">',
	'				<%= collection[key]%>',
	'			</li>',
	'		<% } %>',
	'		</ul>',
	'		<span>x</span>'].join('')
};