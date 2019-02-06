import express from 'express';
const router = express.Router();

const students = [
    { "id": 1, "name": "Joey", "major": "literature" },
    { "id": 2, "name": "Mike", "major": "law" },
]

/* Get */
router.get('/', (req, res, next) => {
    res.status(200).send({
        success_code: 'student_retrieved_success',
        success_description: 'Student retrieved successfully',
        details: students,
    });
});

/* Get one */
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    console.log('id', id);
    students.map((student => {
        console.log('student', student);
        if (student.id === id) {
            console.log('matched')
            res.status(200).send({
                success_code: 'student_retrieved_success',
                success_description: 'Student retrieved successfully',
                details: student,
            });
        }
    }))
});

/** Post */
router.post('/', (req, res, next) => {
    const student = new Student(students.length + 1, req.body);
    students.push(student);
    return res.status(201).send({
        success_code: 'student_retrieved_success',
        success_description: 'Student added successfully',
        details: student,
    });

});

/** Put */
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id, 10);
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
});

/** Delete */
router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id, 10);
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
});

export default router;

function Student(id, student) {
    this.id = id;
    this.name = student.name;
    this.major = student.major;
}
