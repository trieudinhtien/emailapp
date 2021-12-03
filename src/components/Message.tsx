import React, {FC,useState} from 'react'
import { EmailBoxComponent } from './EmailBoxComponent'
import { EmailDetailComponent } from './EmailDetailComponent'
import { EmailPreviewComponent } from './EmailPreviewComponent'
import { IEMAIL } from './Interface'

interface Props{
    listDataEmail: IEMAIL[];
}
// trong day da bi loc user roi, nhan prop tu app.tsx

export const Message:FC<Props> = ({listDataEmail}) => {
    const [arr, setArr] = useState<IEMAIL[]>([])
    const selectFolder = (data: string) => {
        console.log(data);
        let newlist = [...listDataEmail]
        setArr(
            newlist.filter((item)=> {
                return item.folder === data;
            })
        )
    }
    return (
        <div>
            <div className='d-flex'>
                <EmailBoxComponent selectFolder={selectFolder} />
                <EmailPreviewComponent listDataEmail={listDataEmail} />
            </div>
           {/* <EmailDetailComponent />  */}
        </div>
    )
}
