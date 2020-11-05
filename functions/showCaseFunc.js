const Paragraph = document.querySelectorAll('p');

let a;

const hideParagraph1 = () => {
        if (a == 1) {
        Paragraph[0].style.display = 'inline';
        return a = 0;
    } else {
        Paragraph[0].style.display = 'none'
        return a = 1;
    }
}

const hideParagraph2 = () => {
    if (a == 1) {
        Paragraph[1].style.display = 'inline';
        return a = 0;
    } else {
        Paragraph[1].style.display = 'none'
        return a = 1;
    }
};

const hideParagraph3 = () => {
    if (a == 1) {
        Paragraph[2].style.display = 'inline';
        return a = 0;
    } else {
        Paragraph[2].style.display = 'none'
        return a = 1;
    }
};

const hideParagraph4 = () => {
    if (a == 1) {
        console.log(Paragraph[4]);
        Paragraph[3].style.display = 'inline';
        
        return a = 0;
    } else {
        Paragraph[3].style.display = 'none';
        return a = 1;
    }

    
};
    
