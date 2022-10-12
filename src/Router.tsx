import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Login from './pages/Login';
import New from './pages/New';
import Single from './pages/Single';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="users">
                    <Route index element={<List />} />
                    <Route path=":userId" element={<Single />} />
                    <Route path="new" element={<New />} />
                </Route>
                <Route path="customers">
                    <Route index element={<List />} />
                    <Route path=":customerId" element={<Single />} />
                    <Route path="new" element={<New />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router