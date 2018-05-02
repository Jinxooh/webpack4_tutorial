import React from 'react';

/*const data = [
    {id: 1, name: 'AAA', value:'1'},
    {id: 1, name: 'BBB', value:'2'},
    {id: 1, name: 'CCC', value:'3'}
]*/



const TableBasic = () => {
    return(
        <div>
            <table>
            <colgroup>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                </colgroup>
                <thead>
                    <th>title</th>
                    <th>title</th>
                    <th>title</th>
                    <th>title</th>
                </thead>
                <tbody>
                    <tr>
                        <th>th_text</th>
                        <td>td_text</td>
                        <td>td_text</td>
                        <td>td_text</td>
                    </tr>
                    <tr>
                        <th>th_text</th>
                        <td>td_text</td>
                        <td>td_text</td>
                        <td>td_text</td>
                    </tr>
                    <tr>
                        <th>th_text</th>
                        <td>td_text</td>
                        <td>td_text</td>
                        <td>td_text</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableBasic;