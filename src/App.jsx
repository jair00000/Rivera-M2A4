import SignupForm from './components/SignupForm.jsx'
import TitleSetter from './components/TitleSetter.jsx'
import LiftedSearch from './components/LiftedSearch.jsx'

export default function App() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <h1>Activity 4 - Effects, lifting state, forms</h1>
      <section><h2>Sign up form</h2><SignupForm /></section>
      <section><h2>Title setter</h2><TitleSetter text="Hello from Activity 4" /></section>
      <section><h2>Lifted search</h2><LiftedSearch /></section>
    </main>
  )
}
