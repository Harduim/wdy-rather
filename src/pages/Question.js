import { useHistory, useParams } from 'react-router-dom'
import Layout from '../components/Layout'


const maxChars = 255
const minChars = 10
const charLimitWarn = 150

const Question = () => {
    const p = useParams()
    return  (
        <Layout>
            <h1>Question</h1>
            {JSON.stringify(p)}
            <br />
        </Layout>
    )
}



export default Question;