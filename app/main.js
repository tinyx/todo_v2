import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './top-bar.jsx';
import ClassNav from './class-nav.jsx';

main();

function main() {
    ReactDOM.render(<div>
                        <TopBar />
                        <div>
                            <ClassNav />
                        </div>
                    </div>
                    , document.getElementById('app'));
}
