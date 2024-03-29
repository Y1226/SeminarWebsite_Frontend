import DownloadToExcel from '../../Tables/Manager/DownloadToExcel';
import '../Pencile/FileUpload.scss'

export const StudentTable = () => {

    const selectedColumns = [
        'userFirstName',
        'userLastName',
        'userId',
        'userEnglishDateOfBirth',
        'userHebrewDateOfBirth',
        'userAddress',
        'userLocationCity',
        'userHomePhoneNumber',
        'studentFatherCellPhoneNumber',
        'studentMotherCellPhoneNumber',
        'userCellPhoneNumber',
        'studentGrade',
        'studentClassNumber',
        'studentFirstMajorName',
        'studentSecondMajorName',
        'userPassword',
    ];

    return <DownloadToExcel selectedColumns={selectedColumns} table={selectedColumns} type={'studentData.xlsx'}></DownloadToExcel>
}

// {/* <table className="instructionTable">
//             <thead>
//                 <tr>
//                     <th>שם פרטי</th>
//                     <th>שם משפחה</th>
//                     <th>תעודת זהות</th>
//                     <th>תאריך לידה לועזי</th>
//                     <th>תאריך לידה עברי</th>
//                     <th>כתובת</th>
//                     <th>עיר</th>
//                     <th>טלפון בית</th>
//                     <th>פלאפון אבא</th>
//                     <th>פלאפון אמא</th>
//                     <th>פלאפון</th>
//                     <th>תאריך תחילת לימודים</th>
//                     <th>כיתה</th>
//                     <th>מספר כיתה</th>
//                     <th className="instructionButton"
//                         onClick={() => {
//                             navigator.clipboard.writeText(
//                                 'שם פרטי	שם משפחה	תעודת זהות	תאריך לידה לועזי	תאריך לידה עברי	כתובת	עיר	טלפון בית	פלאפון אבא	פלאפון אמא	פלאפון	תאריך תחילת לימודים	כיתה	מספר כיתה'
//                             )
//                         }}
//                     >העתק</th>
//                 </tr>
//             </thead>
//         </table>
//         <br />
//         <h4>שימו ❤️!</h4>
//         <h4>בכל תחילת שנת לימודים יש לעדכן את שנתון התלמידות לפי השנה המתאימה.</h4>
//         <h4>תלמידות חדשות לשנה א (A),</h4>
//         <h4>ותלמידות שנה א לשנה ב (B).</h4> */}