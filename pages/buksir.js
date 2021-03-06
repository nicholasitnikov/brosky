import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <main className='container p-8 mt-4 mx-auto max-w-[720px]'>
            <h1 className='font-serif text-3xl mb-8'>
                «Баллада о маленьком буксире»
            </h1>
            <p className={'leading-7 font-serif text-lg pb-8'}>
                &laquo;Баллада о&nbsp;маленьком буксире&raquo;&nbsp;&mdash; это
                первая отечественная публикация поэта, появившаяся
                в&nbsp;11&nbsp;номере журнала &laquo;Костер&raquo; за
                1962&nbsp;год, как стало понятно впоследствии,
                в&nbsp;сокращенном виде. Данное лиро- эпическое сочинение
                воспринимается не&nbsp;иначе как рассказ-монолог- исповедь
                лирического субъекта. Полный текст, ставший известным благодаря
                юбилейному номеру журнала &laquo;Старое литературное
                обозрение&raquo;, позволяет утверждать, что это лирическое
                повествование заключает два плана. Именовать их
                &laquo;взрослым&raquo; и&nbsp;&laquo;детским&raquo;, думается,
                вполне правомерно. Но&nbsp;различие определяется вовсе
                не&nbsp;шкалой &laquo;лежащее на&nbsp;поверхности &mdash;
                глубинное&raquo; или &laquo;понятное событийное&nbsp;&mdash;
                высокое метафизическое&raquo;. Думается, в&nbsp;этой связи
                поэзия вообще не&nbsp;подлежит дифференциации:
                &laquo;взрослая&raquo; и&nbsp;&laquo;детская&raquo;; учитывать
                следует только языковой критерий, потому что только языковые
                единицы сообщают форму поэтическому образу. (Из&nbsp;статьи
                &quot; МЕТАТЕКСТУАЛЬНЫЙ ХАРАКТЕР ПОЭТИКИ ДЕТСТВА
                В&nbsp;&laquo;БАЛЛАДЕ О&nbsp;МАЛЕНЬКОМ БУКСИРЕ&raquo; И.А.
                БРОДСКОГО&quot; Т.&nbsp;Дорониной)
            </p>
        </main>
    );
}
