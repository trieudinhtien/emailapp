import React, {FC} from 'react'
import { IEMAIL } from './Interface'

interface Props{
    listDataEmail: IEMAIL[];
}

export const EmailPreviewComponent:FC<Props> = ({listDataEmail}) => {
    return (
        <div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Sender</th>
                <th scope="col">Subject</th>
                <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                {listDataEmail.map((item,index: number)=> (
                    <tr key={index}>
                    <td>{item.from}</td>
                    <td>{item.to}</td>
                    <td>{item.folder}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}
