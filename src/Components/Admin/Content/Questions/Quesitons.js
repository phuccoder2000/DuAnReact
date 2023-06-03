import { useState } from 'react';
import Select from 'react-select';
import './Question.scss'
import { BsFillPatchPlusFill } from "react-icons/bs";
import { BsPatchMinusFill } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiFillPlusSquare } from "react-icons/ai";
import { RiImageAddLine } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash'



const Questions = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const [selectedQuiz, setselectedQuiz] = useState({})
    const [questions, setQuestions] = useState(
        [
            {
                id: uuidv4(),
                description: 'questions 1',
                imageFile: '',
                imageName: '',
                answers: [
                    {
                        id: uuidv4(),
                        description: 'answer 1',
                        isCorrect: false,
                    }

                ]
            }
        ]
    )

    const handleAddRemoveQuestion = (type, id) => {
        if (type === 'ADD') {
            const newQuestion = {
                id: uuidv4(),
                description: '',
                imageFile: '',
                imageName: '',
                answers: [
                    {
                        id: uuidv4(),
                        description: '',
                        isCorrect: false,
                    }
                ]
            };
            setQuestions([...questions, newQuestion])
        }
        if (type === 'REMOVE') {
            let questionClone = _.cloneDeep(questions);
            questionClone = questionClone.filter(item => item.id !== id);
            setQuestions(questionClone)

        }
        // console.log("check:", type, id)
    }
    const handleAddRemoveAnswer = (type, questionId, answerId) => {
        let questionClone = _.cloneDeep(questions);
        if (type === 'ADD') {
            const newAnswer =
            {
                id: uuidv4(),
                description: '',
                isCorrect: false,
            };
            let index = questionClone.findIndex(item => item.id === questionId)
            // console.log('index', index)
            questionClone[index].answers.push(newAnswer)
            setQuestions(questionClone)

        }
        if (type === 'REMOVE') {
            let index = questionClone.findIndex(item => item.id === questionId)
            questionClone[index].answers =
                questionClone[index].answers.filter(item => item.id !== answerId)
            setQuestions(questionClone)
        }
        // console.log("check:", type, questionId, answerId)
    }
    // console.log("Question", questions)
    return (
        <div className="question-container">
            <div className="title">
                Manage Questions
            </div>
            <hr></hr>
            <div className="add-new-questions">
                <div className='col-6 form-group'>
                    <label className='mb-2'>Select Quiz</label>
                    <Select
                        value={selectedQuiz}
                        onChange={setselectedQuiz}
                        options={options}
                    />
                </div>
                <div className='mt-3 mb-2'>
                    Add question
                </div>
                {
                    questions && questions.length > 0
                    && questions.map((question, index) => {
                        return (
                            <div key={question.id} className='q-main mb-5'>
                                <div className='question-content'>
                                    <div className="form-floating description ">
                                        <input
                                            type="type"
                                            className="form-control"
                                            placeholder="name@example.com"
                                            value={question.description}
                                        />
                                        <label >Question {index + 1}'s description</label>
                                    </div>
                                    <div className='group-upload'>
                                        <label className='lable-upload'><RiImageAddLine /></label>
                                        <input type='file' hidden></input>
                                        <span>0 file is upload</span>
                                    </div>
                                    <div className='btn-add'>
                                        <span onClick={() => handleAddRemoveQuestion('ADD', '')}>
                                            <BsFillPatchPlusFill className='icon-add' />
                                        </span>
                                        {questions.length > 1 &&
                                            <span onClick={() => handleAddRemoveQuestion('REMOVE', question.id)}>
                                                <BsPatchMinusFill className='icon-remove' />
                                            </span>
                                        }
                                    </div>
                                </div>
                                {
                                    question.answers && question.answers.length > 0
                                    && question.answers.map((answer, index) => {
                                        return (
                                            <div key={answer.id} className='answers-content'>
                                                <input className="form-check-input iscorrect"
                                                    type="checkbox"
                                                />
                                                <div className="form-floating answer-name ">
                                                    <input type="text"
                                                        className="form-control"
                                                        placeholder="name@example.com"
                                                        value={answer.description}
                                                    />
                                                    <label >Answers {index + 1} </label>
                                                </div>
                                                <div className='btn-group'>
                                                    <span onClick={() => handleAddRemoveAnswer('ADD', question.id)}>
                                                        <AiFillPlusSquare className='icon-add' />
                                                    </span>
                                                    {
                                                        question.answers.length > 1 &&
                                                        <span onClick={() => handleAddRemoveAnswer('REMOVE', question.id, answer.id)} >
                                                            <AiOutlineMinusCircle className='icon-remove' />
                                                        </span>
                                                    }

                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
export default Questions
