document.addEventListener('DOMContentLoaded',()=>{
            
         if(localStorage.getItem('statistics')){
                const data = JSON.parse(localStorage.getItem('statistics'));
                console.log(data);
                const container = document.createElement('div');
                container.className = 'container';
                const cards = document.createElement('div');
                cards.className = 'cards';
                 for (const [key, value] of Object.entries(data)) {
                        
                        const card = document.createElement('div');
                        card.className = 'card';
                        const h3 = document.createElement('h3');
                        h3.textContent=`${key}`;
                        const p = document.createElement('p');
                        p.className='number';
                        p.textContent=`${value}`;
                        const span = document.createElement('span');
                        span.className = 'info';
                        if(key==='pdCount'){
                            span.textContent = 'PDF Count';
                        }else if(key==='docxCount'){
                            span.textContent = 'Docx Count';
                        }else{
                            span.textContent = 'Image Count';
                        }

                        card.appendChild(h3);
                        card.appendChild(p);
                        card.appendChild(span);
                        cards.appendChild(card)
                }

                container.appendChild(cards);
                document.body.appendChild(container);

         }else{
            window.location.href='../../View/index.html';
         }
});