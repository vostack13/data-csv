import React from 'react';
import './common/web-components/test';
import styles from './app.css';

const App = () => {
    const [listUsers, setListUsers] = React.useState([
        {
            place : '1',
            name  : '',
            team  : '',
            date  : '',
            sex   : '',
            kata  : '',
            age   : '',
            weight: '',
            class : '',
            couch : '',
        },
    ]);

    const handleCSVFile = React.useCallback(files => {
        console.log('files', files);
        const f = files[0];

        const reader = new FileReader();

        reader.onload = (function() {
            return function(e) {
                const data = e.target.result;

                const result = data
                    .split(/[\n]+/)
                    .map(I => {
                        const temp = I.split(';');

                        return {
                            place : temp[0],
                            name  : temp[1],
                            team  : temp[2],
                            date  : temp[3],
                            sex   : temp[4],
                            kata  : temp[5],
                            age   : temp[6],
                            weight: temp[7],
                            class : temp[8],
                            couch : temp[9],
                        }
                    });

                setListUsers(result);


                console.log('result', result);
            };
        })(f);

        reader.readAsText(f);
    }, []);

    function dragenter(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function dragover(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function drop(e) {
        e.stopPropagation();
        e.preventDefault();

        const dt = e.dataTransfer;
        const files = dt.files;

        handleCSVFile(files);
    }

    return <div>
        <h1>App</h1>
        <d-counter />

        <input type="file" id='upload-csv' onChange={files => handleCSVFile(files)} />

        <div
            style={{
                width          : '200px',
                height         : '50px',
                backgroundColor: '#f9f9f9',
                border         : '1px dashed #cecece',
            }}

            className='dropbox'
            onDragEnter={dragenter}
            onDragOver={dragover}
            onDrop={drop}
        />

        <table>
            <tbody>
                {listUsers.map(user => <tr key={user.name} className={styles['rowTable']}>
                    <td>{user.place}</td>
                    <td>{user.name}</td>
                    <td>{user.team}</td>
                    <td>{user.date}</td>
                    <td>{user.sex}</td>
                    <td>{user.kata}</td>
                    <td>{user.age}</td>
                    <td>{user.weight}</td>
                    <td>{user.class}</td>
                    <td>{user.couch}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
};

export default App;
