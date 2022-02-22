import {BrowseRouter, Routes, Route} from 'react-router-dom';

export const Router =()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}
