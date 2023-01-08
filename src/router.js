import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import { peopleLoader } from "./loaders"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { createAction } from "./actions"
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={peopleLoader}/>
            <Route path=":id" elemtent={<Show/>}/>
            <Route path="create" action={createAction}/>
            <Route path="update/:id"/>
            <Route path="delete/:id"/>
        </Route>
    )
)
export default router