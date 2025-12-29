window.onload = function () {
    let popupVisible = false;
    let popup;
    let msnWindow;
    let errorPopupVisible = false;
    let explorerWindow = null;

    document.querySelector('.start').addEventListener('click', () => {
        if (!popup) {
            popup = document.createElement('div');
            popup.className = 'start-popup';
            popup.innerHTML = `
                <div class="start-menu">
                    <div class="start-header">
                        <span class="profile"></span>
                        <span class="utente"><strong>Mariachiara Caccamo</strong></span>
                    </div>
                    <div class="start-body">
                        <div class="start-menu-column-left">
                            <div class="start-menu-item"><span class="program-icon explorer"></span>Internet Explorer</div>
                            <div class="start-menu-item"><span class="program-icon msn"></span>Windows Messenger</div>
                            <div class="start-menu-item"><span class="program-icon pc"></span>Risorse del computer</div>
                            <div class="start-menu-item"><span class="program-icon maps"></span>Google Earth</div>
                            <div class="start-menu-item paint"><span class="program-icon paint"></span>Paint</div>
                        </div>
                        <div class="start-menu-column-right">
                            <div class="start-menu-item"><span class="program-icon pinball"></span>Pinball</div>
                            <div class="start-menu-item"><span class="program-icon minesweeper"></span>Campo minato</div>
                            <div class="start-menu-item"><span class="program-icon solitario"></span>Solitario</div>
                            <div class="start-menu-item"><span class="program-icon spider"></span>Spider</div>
                            <div class="start-menu-item"><span class="program-icon freecell"></span>FreeCell</div>
                            <div class="start-menu-item"><span class="program-icon hearts"></span>Hearts</div>
                        </div>
                    </div>
                    <div class="start-footer">
                        <img class="icon prompt" src="./img/prompt.png" id="riapri-terminale" style="display: none;">
                        <img class="icon msn" src="./img/msn.png" id="riapri-msn" style="display: none;">
                        <div class="DateTimeContainer">
                            <div id="currentDate"></div>
                            <div id="currentTime"></div>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(popup);
            popup.style.position = 'absolute';
            popup.style.display = 'flex';
            popup.style.bottom = '30px';
            popup.style.left = '0';
            popup.style.background = '#F0F0F0';
            popup.style.borderRadius = '4px';
            popup.style.width = '450px';
            popup.style.height = '425px';
            popup.style.overflow = 'auto';
            popup.style.zIndex = '1000';
        }

        popupVisible = !popupVisible;
        popup.style.display = popupVisible ? 'block' : 'none';

        document.querySelectorAll('.start-menu-item').forEach((item) => {
            item.addEventListener('click', () => {
                const itemName = item.textContent.trim();
                let newWindow;

                switch (itemName) {
                    case 'Internet Explorer':
                        if (!explorerWindow) {
                            explorerWindow = document.createElement('div');
                            explorerWindow.id = 'explorer-window';
                            explorerWindow.classList.add('app-container');
                            explorerWindow.style.zIndex = 2;
                            explorerWindow.innerHTML = `
                                <div class="header">
                                    <div class="head">Internet Explorer</div>
                                    <input type="button" class="btn-riduci">
                                    <input type="button" class="btn-ingrandisci">
                                    <input type="button" class="btn-chiudi">
                                </div>
                                <div class="content">
                                    <iframe src="../index.html" style="width:100%; height:100%; border:none;"></iframe>
                                </div>
                            `;
                            document.body.appendChild(explorerWindow);

                            const taskIcon = document.querySelector('#riapri-explorer');
                            taskIcon.style.display = 'block';

                            explorerWindow.querySelector('.btn-chiudi').addEventListener('click', () => {
                                explorerWindow.remove();
                                taskIcon.style.display = 'none';
                                explorerWindow = null;
                            });

                            explorerWindow.querySelector('.btn-riduci').addEventListener('click', () => {
                                explorerWindow.style.display = 'none';
                            });

                            taskIcon.addEventListener('click', () => {
                                if (explorerWindow) {
                                    explorerWindow.style.display = 'block';

                                    // Aggiorna dimensioni della content area e iframe
                                    const content = explorerWindow.querySelector('.content');
                                    const iframe = content.querySelector('iframe');
                                    content.style.width = '100%';
                                    content.style.height = '100%';
                                    iframe.style.width = '100%';
                                    iframe.style.height = '100%';
                                }
                            });

                            const btnMax = explorerWindow.querySelector('.btn-ingrandisci');
                            btnMax.addEventListener('click', () => {
                                if (explorerWindow.classList.contains('fullscreen')) {
                                    explorerWindow.classList.remove('fullscreen');
                                    explorerWindow.style.position = 'absolute';
                                    explorerWindow.style.width = '800px';
                                    explorerWindow.style.height = '500px';
                                    explorerWindow.style.top = '60px';
                                    explorerWindow.style.left = '120px';
                                    btnMax.style.backgroundImage = 'url(./img/finestra.jpg)';
                                } else {
                                    explorerWindow.classList.add('fullscreen');
                                    explorerWindow.style.position = 'fixed';
                                    explorerWindow.style.top = '0';
                                    explorerWindow.style.left = '0';
                                    explorerWindow.style.width = '100%';
                                    explorerWindow.style.height = 'calc(100% - 30px)';
                                    btnMax.style.backgroundImage = 'url(./img/minimize.png)';
                                }
                            });

                            const header = explorerWindow.querySelector('.header');
                            let startX, startY, initX, initY;
                            header.addEventListener('mousedown', (e) => {
                                startX = e.clientX;
                                startY = e.clientY;
                                initX = explorerWindow.offsetLeft;
                                initY = explorerWindow.offsetTop;
                                document.addEventListener('mousemove', dragExplorer);
                                document.addEventListener('mouseup', stopDragExplorer);
                            });

                            function dragExplorer(e) {
                                explorerWindow.style.left = initX + (e.clientX - startX) + 'px';
                                explorerWindow.style.top = initY + (e.clientY - startY) + 'px';
                            }

                            function stopDragExplorer() {
                                document.removeEventListener('mousemove', dragExplorer);
                                document.removeEventListener('mouseup', stopDragExplorer);
                            }
                        }
                        break;

                    case 'Windows Messenger':
                        if (!msnWindow) {
                            msnWindow = document.createElement('div');
                            msnWindow.classList.add("app-container");
                            msnWindow.innerHTML = `
                                <div class="header">
                                    <div class="head">MSN Messenger</div>    
                                    <input type="button" id="riduci">
                                    <input type="button" id="ingrandisci">
                                    <input type="button" id="chiudi">
                                </div>
                                <div class="content"></div>`;
                            document.body.appendChild(msnWindow);
                            msnWindow.style.position = 'absolute';
                            msnWindow.style.top = '50px';
                            msnWindow.style.left = '70px';
                            msnWindow.style.height = '500px';
                            msnWindow.style.width = '350px';
                            msnWindow.style.overflow = 'hidden';
                            msnWindow.style.zIndex = '2';
                            msnWindow.style.border = '1px solid #CCCCCC';
                            msnWindow.style.borderRadius = '2px';
                            msnWindow.style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.2)';

                            const iconaRidotta = document.querySelector("#riapri-msn");
                            iconaRidotta.style.display = "block";

                            fetch('./php/login.php')
                                .then(response => response.text())
                                .then(data => msnWindow.querySelector('.content').innerHTML = data)
                                .catch(error => console.error('Errore:', error));

                            msnWindow.querySelector("#chiudi").addEventListener("click", (event) => {
                                event.preventDefault();
                                msnWindow.remove();
                                iconaRidotta.style.display = 'none';
                                msnWindow = null;
                            });

                            msnWindow.querySelector("#ingrandisci").addEventListener("click", (event) => {
                                event.preventDefault();
                                if (msnWindow.style.position === "fixed") {
                                    msnWindow.style.position = "absolute";
                                    msnWindow.style.top = "50px";
                                    msnWindow.style.left = "70px";
                                    msnWindow.style.width = "350px";
                                    msnWindow.style.height = "500px";
                                    event.target.style.backgroundImage = 'url("./img/finestra.jpg")';
                                } else {
                                    msnWindow.style.position = "fixed";
                                    msnWindow.style.top = "0";
                                    msnWindow.style.left = "0";
                                    msnWindow.style.width = "100%";
                                    msnWindow.style.height = "100%";
                                    event.target.style.backgroundImage = 'url("./img/minimize.png")';
                                }
                            });

                            msnWindow.querySelector("#riduci").addEventListener("click", (event) => {
                                event.preventDefault();
                                msnWindow.style.display = 'none';
                            });

                            let startX, startY, initialX, initialY;
                            msnWindow.addEventListener('mousedown', (e) => {
                                startX = e.clientX;
                                startY = e.clientY;
                                initialX = msnWindow.offsetLeft;
                                initialY = msnWindow.offsetTop;
                                document.addEventListener('mousemove', dragMsn);
                                document.addEventListener('mouseup', stopDragMsn);
                            });

                            function dragMsn(e) {
                                const newX = initialX + (e.clientX - startX);
                                const newY = initialY + (e.clientY - startY);
                                msnWindow.style.top = `${newY}px`;
                                msnWindow.style.left = `${newX}px`;
                            }

                            function stopDragMsn() {
                                document.removeEventListener('mousemove', dragMsn);
                                document.removeEventListener('mouseup', stopDragMsn);
                            }
                        }
                        break;

                    case 'Risorse del computer':
                        if (!errorPopupVisible) showErrorPopup();
                        break;

                    case 'Google Earth':
                        newWindow = window.open('./mappe.html', '_self');
                        break;

                        
                }

                if (newWindow) newWindow.focus();
            });
        });

        function shuffleItems(container) {
            const items = Array.from(container.children);
            items.sort(() => Math.random() - 0.5);
            items.forEach(item => container.appendChild(item));
        }

        const rightColumn = document.querySelector('.start-menu-column-right');
        rightColumn.addEventListener('click', () => shuffleItems(rightColumn));

        rightColumn.querySelectorAll('.start-menu-item').forEach(item => {
            item.addEventListener('mousedown', (event) => {
                event.preventDefault();
                item.style.display = '';
                document.addEventListener('mouseup', () => {
                    item.style.display = '';
                });
            });
        });

        const riapriMsn = document.querySelector('#riapri-msn');
        riapriMsn.addEventListener('click', () => {
            if (msnWindow) msnWindow.style.display = 'block';
        });
    });

    function showErrorPopup() {
        const errorPopup = document.createElement('div');
        errorPopup.className = 'error-popup';
        errorPopup.innerHTML = `
            <div class="error-header">
                <span class="error-icon"></span>
                <span class="error-title"><b>Errore!</b></span>
                <button class="error-close">X</button> 
            </div>
            <div class="error-body">
                <p>Impossibile accedere a <i>'Risorse del computer'</i>.</p>
            </div>
        `;
        document.body.appendChild(errorPopup);

        errorPopup.querySelector('.error-close').addEventListener('click', () => closeErrorPopup());
        errorPopupVisible = true;
    }

    function closeErrorPopup() {
        const errorPopup = document.querySelector('.error-popup');
        if (errorPopup) {
            errorPopup.remove();
            errorPopupVisible = false;
        }
    }
};
