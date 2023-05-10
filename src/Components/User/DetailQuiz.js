import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom"
import { getDataQuiz } from "../../services/apiService";
import _ from 'lodash'
import './DetailQuiz.scss'
import Question from "./Question";

const DetailQuiz = () => {
    const params = useParams();
    const location = useLocation()
    const quizID = params.id;

    const [dataQuiz, setDataQuiz] = useState([])
    const [index, setIndex] = useState(0)
    useEffect(() => {
        fetchQuestion()
    }, [quizID])

    const fetchQuestion = async () => {
        let res = await getDataQuiz(quizID)
        // console.log("check question:", res)
        if (res && res.EC === 0) {
            let raw = res.DT
            let data = _.chain(raw)
                // Group the elements of Array based on `id` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let answers = [];
                    let questionDescription, image = null
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description
                            image = item.image
                        }
                        item.answers.isSelected = false;
                        answers.push(item.answers);
                        // console.log('item answer', item.answers)
                    })
                    // console.log("value:", value, "key:", key)


                    return {

                        questionId: key, answers, questionDescription, image
                    }
                })
                .value()
            console.log("data", data)
            setDataQuiz(data)
        }
    }
    console.log("check dataquiz", dataQuiz)
    
    const handelPrev = () => {
        if (index - 1 < 0) return;
        setIndex(index - 1)
    }
    const handelNext = () => {
        if (dataQuiz && dataQuiz.length > index + 1)
            setIndex(index + 1)
    }
    const handleCheckBox = (answerId, questionId) => {
        // cloneDeep: sao chép tất cả oj
        let dataQuizClone = _.cloneDeep(dataQuiz);
        // hàm find : trong TH ko tìm thấy trả về undefined
        let question = dataQuizClone.find(item => + item.questionId === + questionId)
        if (question && question.answers) {
            // console.log("question:", question)
            question.answers = question.answers.map(item => {
                if (+item.id === +answerId) {
                    item.isSelected = ! item.isSelected;
                }
                return item;
            })

            // console.log(b)
        }
        let index = dataQuizClone.findIndex(item => +item.questionId === + questionId)
        if (index > -1) {
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone)
        }

    }
    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz: {quizID} :  {location?.state?.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img></img>
                </div>
                <div className="q-content">
                    <Question
                        handleCheckBox={handleCheckBox}
                        index={index}
                        data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : [0]}

                    />

                </div>
                <div className="footer">
                    <button className="btn btn-secondary" onClick={() => handelPrev()}>Prev</button>
                    <button className="btn btn-primary mr-3" onClick={() => handelNext()}>Next</button>
                    <button className="btn btn-warning " onClick={() => handelNext()}>Finish</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}
export default DetailQuiz