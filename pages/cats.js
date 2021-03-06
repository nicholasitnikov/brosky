import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <main className='container p-8 mt-4 mx-auto max-w-[720px]'>
            <h1 className='font-serif text-3xl mb-8'>Кошки</h1>
            <p className={'leading-7 font-serif text-lg pb-8'}>
                Кошки были с&nbsp;поэтом везде. И&nbsp;до, и&nbsp;после
                эмиграции они жили с ним. Можно сказать, что поэт никогда
                не&nbsp;был один. Он&nbsp;не&nbsp;раз признавался знакомым, что
                в&nbsp;следующей жизни желал&nbsp;бы стать котом. В&nbsp;эссе
                &laquo;Полторы комнаты&raquo; Бродский сообщает нам некоторые
                факты о&nbsp;его кошке Марусе:
            </p>
            <p className={'leading-7 font-serif text-lg pb-8'}>
                &laquo;...Мы звали ее&nbsp;Маруся, Маня, Манечка (уменьшительные
                имена, употреблявшиеся ее&nbsp;сестрами и&nbsp;моим отцом)
                и&nbsp;Мася или Киса&nbsp;&mdash; мои изобретения. С&nbsp;годами
                последние два получили большее хождение, и даже отец стал
                обращаться к&nbsp;ней таким образом.... Киса, эта нежная кличка
                кошки, вызывала довольно долго ее&nbsp;сопротивление. &laquo;Не
                смейте называть меня так! &mdash;&nbsp;восклицала она сердито.
                &mdash;&nbsp;И&nbsp;вообще перестаньте пользоваться вашими
                кошачьими словами. Иначе останетесь с&nbsp;кошачьими
                мозгами!&raquo;
            </p>
            <p className={'leading-7 font-serif text-lg pb-8'}>
                А&nbsp;уж&nbsp;сколько стихов он&nbsp;посвятил котам, наверное,
                больше, чем любой другой поэт. Когда Бродскому было 17&nbsp;лет,
                он&nbsp;написал стихотворение о&nbsp;&laquo;тощем, облезлом,
                рыжем&raquo; коте, брошенном на улице. Завершающие строки звучат
                так: &laquo;...Почему некрасивых не любят. Кто-то должен любить
                некрасивых&raquo;. Тогда, в&nbsp;1957&nbsp;году, будущий
                писатель начал работать в&nbsp;геологических экспедициях НИИГА
                (научно-исследовательского института геологии и минеральных
                ресурсов Мирового океана) и&nbsp;отправился сначала на Белое
                море, потом&nbsp;&mdash; в&nbsp;Восточную Сибирь и&nbsp;Северную
                Якутию. Через четыре года, после нервного срыва ему разрешили
                вернуться в Ленинград. Бродский искал себя, своё призвание,
                читая буквально всё, что попадало под руку, делая первые шаги
                в&nbsp;писательстве, но в&nbsp;душе был потерянным
                и&nbsp;неприкаянным, как кот из&nbsp;одноимённого стихотворения.
            </p>
        </main>
    );
}
