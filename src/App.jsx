import {Col, Container, Row} from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import Login from "./component/Login"
import Signup from "./component/Signup"
import { UserAuthContextProvider } from "./context/userAuthContext"
import Home from "./component/Home"
import ProtectedRoute from "./component/Protected"
const App = () => {
  return (

    <Container>
    <Row>
      <Col>

      <UserAuthContextProvider>


      <Routes>
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>


      </Routes>

      </UserAuthContextProvider>
      </Col>

    </Row>
    </Container>
  )
}

export default App