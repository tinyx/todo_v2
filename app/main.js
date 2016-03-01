import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './top-bar.jsx';
import ClassNav from './class-nav.jsx';
require("../css/main.css");

main();

function main() {
    ReactDOM.render(<div>
                        <TopBar />
                        <div>
                            <ClassNav
                              classNames={['Class 1', 'Class 2']}
                            />
                        </div>
                    </div>
                    , document.getElementById('app'));
}
