export const greeting: string = `
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin et mauris integer fringilla augue. Lacus hendrerit phasellus molestie suscipit nisi, vestibulum facilisis. Pretium consequat at commodo lorem porta habitant suspendisse ac enim. Arcu vel aliquam turpis pellentesque. Commodo luctus consectetur ut euismod sed in id interdum. </p><p> Risus purus ante malesuada sed porttitor interdum nascetur phasellus. Diam ante pharetra, placerat penatibus leo odio sit amet, commodo. Nulla iaculis quisque pharetra sit scelerisque id. Eu justo, pharetra, nisl, facilisis mattis sit viverra ipsum ut. Porta rhoncus nibh hendrerit quis ante consequat non. </p>`

export const aboutContent: string = `
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin et mauris integer fringilla augue. Lacus hendrerit phasellus molestie suscipit nisi, vestibulum facilisis. Pretium consequat at commodo lorem porta habitant suspendisse ac enim. Arcu vel aliquam turpis pellentesque. Commodo luctus consectetur ut euismod sed in id interdum.
</p><p> Risus purus ante malesuada sed porttitor interdum nascetur phasellus. Diam ante pharetra, placerat penatibus leo odio sit amet, commodo. Nulla iaculis quisque pharetra sit scelerisque id. Eu justo, pharetra, nisl, facilisis mattis sit viverra ipsum ut. Porta rhoncus nibh hendrerit quis ante consequat non.  </p>`

export const offer1: string = `
<p>Nasz ośrodek łączy pasje i pokolenia. Infrastruktura jest wykorzystana w głównej mierze na cele statutowe <strong>Związku Harcerstwa Polskiego </strong>, ale jesteśmy też otwarci na zewnętrzne inicjatywy.  
Jeżeli chcesz wstąpić w szeregi “wodniaków” - sprawdź naszą <strong>zakładkę “O nas”</strong>. Tam znajdziesz opis i kontakt do opiekunów i instruktorów, którzy prowadzą poszczególne jednostki. </p><p>Nasz ośrodek świetnie się sprawdza przy organizacji: </p>

`

export const offer2: string = `
<ul>
<li>- Biwaków (również tych pod namiotami)</li>
<li>- Ognisk integracyjnych  </li>
<li>- Warsztatów  </li>
<li>- Prezentacji </li>
<li>- Konferencji</li>
<li>- Kursów</li>
<li>- Urodzin (nie tylko jednocyfrowych) </li>
<li>- Komunii </li>
<li>- Chrzcin</li>
<li>- Spotkań w gronie rodziny i przyjaciół </li>
</ul>
`

type News = {
    imageUrl: string,
    title: string,
    text: string
}

export const newsList: News[] = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1524722296347-8f15fbd74c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        title: 'Suspendisse tellus risus',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl in lectus accumsan sollicitudin a vel nunc. Ut et nulla non velit interdum interdum eu et felis. Nam nibh risus, suscipit vitae condimentum in, porta et dolor. In condimentum lobortis risus, a semper felis accumsan vitae. In hac habitasse platea dictumst. Nam interdum erat dui, pharetra finibus erat lacinia eget. Vestibulum ac dolor eget massa gravida elementum nec eu nunc. '
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1568518951277-0227d2eeb517?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHNhaWxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title: 'Suspendisse tellus risus sol',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl in lectus accumsan sollicitudin a vel nunc. Ut et nulla non velit interdum interdum eu et felis. Nam nibh risus, suscipit vitae condimentum in, porta et dolor. In condimentum lobortis risus, a semper felis accumsan vitae. In hac habitasse platea dictumst. Nam interdum erat dui, pharetra finibus erat lacinia eget. Vestibulum ac dolor eget massa gravida elementum nec eu nunc. '
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1602943554726-d8bebe914982?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        title: 'Nam nibh risus',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl in lectus accumsan sollicitudin a vel nunc. Ut et nulla non velit interdum interdum eu et felis. Nam nibh risus, suscipit vitae condimentum in, porta et dolor. In condimentum lobortis risus, a semper felis accumsan vitae. In hac habitasse platea dictumst. Nam interdum erat dui, pharetra finibus erat lacinia eget. Vestibulum ac dolor eget massa gravida elementum nec eu nunc. '
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl in lectus accumsan sollicitudin a vel nunc. Ut et nulla non velit interdum interdum eu et felis. Nam nibh risus, suscipit vitae condimentum in, porta et dolor. In condimentum lobortis risus, a semper felis accumsan vitae. In hac habitasse platea dictumst. Nam interdum erat dui, pharetra finibus erat lacinia eget. Vestibulum ac dolor eget massa gravida elementum nec eu nunc. '
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1470645792662-dd18394f8c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        title: 'In hac habitasse platea ',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl in lectus accumsan sollicitudin a vel nunc. Ut et nulla non velit interdum interdum eu et felis. Nam nibh risus, suscipit vitae condimentum in, porta et dolor. In condimentum lobortis risus, a semper felis accumsan vitae. In hac habitasse platea dictumst. Nam interdum erat dui, pharetra finibus erat lacinia eget. Vestibulum ac dolor eget massa gravida elementum nec eu nunc. '
    },
]
export const nearestEvent: News = {
    imageUrl: 'https://images.unsplash.com/photo-1506527240747-720a3e17b910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
    title: 'Lorem Ipsum',
    text: 'Morbi neque sit vitae sit et enim. Amet montes, odio vitae tincidunt turpis gravida lectus velit, ac. Consequat enim, arcu, enim morbi quam arcu, ornare mi quis. Erat mi, egestas sed augue purus in sociis pellentesque.'
}