import * as React from 'react'
import { handleAddPoll } from '../actions/polls'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function AddPoll () {
    const history = useHistory()
    const dispatch = useDispatch()

    const [options, setOptions] = React.useState({
        a: '', b: '', c: '', d: ''
    })

    const [question, setQuestion] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push('/')
        dispatch(handleAddPoll({
            question,
            ...options
        }))
    }

    const handleInputChange = ({ target }) => {
        const { value, name } = target

        setOptions({
            ...options,
            [name]: value
        })
    }

    const isDisabled = () => {
        return question === ''
            || options.a === ''
            || options.b === ''
            || options.c === ''
            || options.d === ''
    }

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <h3 style={{marginBottom: 5}}>
                What is your question?
            </h3>
            <input type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            name='question'
            className='input'
            />

            <h3>What are the options</h3>

            <label htmlFor="input" className='label'>A.</label>
            <input type="text"
            value={options.a}
            onChange={handleInputChange}
            name='a'
            className='input'
            />
            <label htmlFor="input" className='label'>B.</label>
            <input type="text"
            value={options.b}
            onChange={handleInputChange}
            name='b'
            className='input'
            />
            <label htmlFor="input" className='label'>C.</label>
            <input type="text"
            value={options.c}
            onChange={handleInputChange}
            name='c'
            className='input'
            />
            <label htmlFor="input" className='label'>D.</label>
            <input type="text"
            value={options.d}
            onChange={handleInputChange}
            name='d'
            className='input'
            />
            <button className='btn' disabled={isDisabled()}>
                Submit
            </button>
        </form>
    )
}