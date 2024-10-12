import { Wrapper } from './components/Wrapper.style'
import { Card, Benefits, Ilustration, Form, Description, ContainerLabel, Modal, Fade } from './styles'
import List from './assets/images/icon-list.svg'
import ImgIlustration from './assets/images/illustration-sign-up-desktop.svg'
import { useRef } from 'react'
import Success from './pages/Success'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { showForm } from './features/modalSlice'
import { hideForm } from './features/modalSlice'

function App() {

  const dispatch = useDispatch()
  const {show} = useSelector(state => state.modal)

  const inputRef = useRef(null)
  const spanRef = useRef(null)
  const formRef = useRef(null)
  const classHide = 'hide'
  const navigate = useNavigate()

  function showError() {
    if (!validateEmail(inputRef.current.value)) {
      spanRef.current.classList.remove(classHide)
      inputRef.current.style.border = '1px solid red'
      inputRef.current.style.background = '#FFE8E6'
      dispatch(showForm())
      setTimeout(() => {
        dispatch(hideForm())
      }, 2000)
      return
    }

    alert('Formulario enviado com sucesso')
    formRef.current.reset()
    navigate('/success')
  }

  function clearError() {
    spanRef.current.classList.add(classHide)
    inputRef.current.style.border = '1px solid hsl(231, 7%, 60%)'
    inputRef.current.style.background = 'none'
  }

  function validateEmail(email) {
    const aplication = new RegExp(
      /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]/
    )

    if (aplication.test(email)) {
      return true
    }

    return false
  }

  return (
    <>
      <Wrapper className='wrapper'>
        {
          show && (
            <>
              <Fade/>
              <Modal>
                <h2>[Error] please enter a valid email</h2>
              </Modal>
            </>
          )
        }
        <Card>
          <Description>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <Benefits>
              <img src={List} alt='icon list' />
              <span>Product discovery and building what matters</span>
            </Benefits>
            <Benefits>
              <img src={List} alt='icon list' />
              <span>Measuring to ensure updates are a success</span>
            </Benefits>
            <Benefits>
              <img src={List} alt='icon list' />
              <span>And much more!</span>
            </Benefits>
            <Form onSubmit={(e) => {
              e.preventDefault()
              showError()
            }} ref={formRef} className='form' action={Success} method='get' autoComplete='on'>
              <ContainerLabel>
                <label htmlFor="email">Email address</label>
                <span ref={spanRef} className='text-error hide'>Valid email required</span>
              </ContainerLabel>
              <input ref={inputRef} type="email" id='email' placeholder='email@company.com' className='input-email' onInput={clearError} />
              <input type="submit" value="Subscribe to monthly newsletter" className='btn-submit' />
            </Form>
          </Description>
          <picture>
            <source media="(max-width: 668px)" srcSet="/illustration-sign-up-mobile.svg" />
            <Ilustration src={ImgIlustration} alt="ilustration" />
          </picture>
        </Card>
      </Wrapper>
    </>
  )
}

export default App