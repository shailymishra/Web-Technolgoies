const students = [
    { "id": 1, "name": "Joey", "major": "literature" },
    { "id": 2, "name": "Mike", "major": "law" },
]

class StudentController {
    findAll(req, res) {
        return res.status(200).send({
            success_code: 'student_retrieved_success',
            success_description: 'Student retrieved successfully',
            details: students,
        });
    }
    create(req, res) {
        const student = new Student(students.length + 1, req.body);
        students.push(student);
        return res.status(201).send({
            success_code: 'student_retrieved_success',
            success_description: 'Student added successfully',
            details: student,
        });
    }
    findById(req, res) {
        const id = req.params.id
        students.map((student => {
            if (student.id === id) {
                res.status(200).send({
                    success_code: 'student_retrieved_success',
                    success_description: 'Student retrieved successfully',
                    details: student,
                });
            }
        }))
    };
    update(req, res) {
        const id = req.params.id;
        const updatedStudentIndex = students.findIndex(student => student.id === id);
        if (updatedStudentIndex == -1) {
            res.status(404).send({
                error_code: 'student_updated_failed',
                error_description: 'Student updated failed',
                details: null,
            });
        } else {
            const updatedStudent = new Student(id, req.body);
            students.splice(updatedStudentIndex, 1, updatedStudent);
            res.status(201).send({
                success_code: 'student_updated_success',
                success_description: 'Student updated successfully',
                details: updatedStudent,
            });
        }
    };

    delete(req, res) {
        const id = req.params.id;
        const deleteStudentIndex = students.findIndex(student => student.id === id);
        if (deleteStudentIndex == -1) {
            res.status(404).send({
                error_code: 'student_deletion_failed',
                error_description: 'Student deletion failed',
                details: null,
            });
        } else {
            students.splice(deleteStudentIndex, 1);
            res.status(200).send({
                success_code: 'student_deleted_success',
                success_description: 'Student deleted successfully',
                details: {},
            });
        }
    };


}

const studentController = new StudentController();
export default studentController;


function Student(id, student) {
    this.id = id;
    this.name = student.name;
    this.major = student.major;
}
