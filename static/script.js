document.addEventListener('DOMContentLoaded', init);


function init() {
    let i = 0;
    let funcs = [zodiac, years, combination];

    document.querySelectorAll('.button').forEach((btn) => {
        btn.addEventListener('click', funcs[i]);

        i++;
    })

    document.querySelector('.button').dispatchEvent(new Event('click'));
}

function zodiac(event, clear = true) {
    if (clear) resetStyles();
    event.currentTarget.classList.add('button-active');

    let elements = ['earth', 'air', 'water', 'fire'];

    let cols = document.querySelectorAll('#symbols col');

    for (let i = 1; i < cols.length - 1; i++) cols[i].classList.add(elements[(i - 1) % 4]);
}

function years(event, clear = true) {
    if (clear) resetStyles();
    event.currentTarget.classList.add('button-active');
    let elements = ['earth', 'air', 'water', 'fire'];

    let rows = document.querySelectorAll('#symbols tr');

    for (let i = 1; i < rows.length; i++) rows[i].classList.add(elements[(i - 1) % 4]);
}

function combination(event) {
    resetStyles();
    event.currentTarget.classList.add('button-active');

    years(event, false);
    zodiac(event, false);

    // document.querySelector('.info-container').style.opacity = '100%';

    let elements = ['earth', 'air', 'water', 'fire'];

    let trs = document.querySelectorAll('#symbols tr');

    for (let i = 1; i < trs.length; i++) {
        for (let j = 1; j < trs[i].children.length -1; j++)
        {
            trs[i].children[j].classList.add(elements[(j-1) % 4]);
            trs[i].children[j].classList.add(trs[i].className);
        }
    }
}

function resetStyles() {
    //unselect buttons
    document.querySelectorAll('.button').forEach((btn) => { btn.classList.remove('button-active'); });

    document.querySelectorAll('#symbols col').forEach(col => { col.className = ''; })
    document.querySelectorAll('#symbols tr').forEach(el => el.className ='');
    document.querySelectorAll('#symbols td').forEach(el => el.className = '');
    // document.querySelector('.info-container').style.opacity = '0';
}