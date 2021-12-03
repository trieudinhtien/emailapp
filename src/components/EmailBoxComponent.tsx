import React, {FC} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { EmailDetailComponent } from './EmailDetailComponent';
import { EmailPreviewComponent } from './EmailPreviewComponent';

interface Props {
    selectFolder(data: string) : void
}

export const EmailBoxComponent:FC<Props> = ({selectFolder}) => {

    return (
        <div>
            <ul className="list-group">
                <Link to="/message/inbox" className="list-group-item" onClick={() =>selectFolder("inbox")}><i className="far fa-folder-open"></i>inbox</Link>
                <Link to="/message/finance"  className="list-group-item" onClick={() =>selectFolder("finance")}><i className="far fa-folder"></i>finance</Link>
                <Link to="/message/travel" className="list-group-item" onClick={() =>selectFolder("travel")}><i className="far fa-folder"></i>travel</Link>
                <Link to="/message/spam" className="list-group-item" onClick={() =>selectFolder("spam")}><i className="far fa-folder"></i>spam</Link>
                <Link to="/message/drafts" className="list-group-item" onClick={() =>selectFolder("drafts")}><i className="far fa-folder"></i>drafts</Link>
                <Link to="/message/sent" className="list-group-item" onClick={() =>selectFolder("sent")}><i className="far fa-folder"></i>sent</Link>
            </ul>
            <Routes>
                <Route path="/message/:folder" element={<EmailDetailComponent />} />
            </Routes>
        </div>
    )
}
