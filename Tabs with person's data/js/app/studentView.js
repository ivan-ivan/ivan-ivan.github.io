function StudentView (studentObj) {
	var student = new Student(studentObj),
		studentTpl = [
		'		<li class="alert alert-info" id="">',
		'			<%= collection.name %>',
		'		</li>'].join(''),
		tpl = _.template(studentTpl);

	this.studentStr = tpl({collection: student.toJSON()});
}