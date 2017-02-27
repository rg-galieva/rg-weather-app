import React from 'react'
import s from './_styles.css'
import {Link} from 'react-router'

function StyleGuide() {
    let id = 1;

    return (
        <div className={[s.style_guide, "txt"].join(" ")}>
            <section className={s.row}>
                <header className={s.heading}><h2>Heading and paragraph</h2></header>
                <div className={s.content}>
                    <h1>heading 1</h1>
                    <h2>heading 2</h2>
                    <h3>heading 3</h3>
                    <h4>heading 4</h4>
                    <h5>heading 5</h5>
                    <h6>heading 6</h6>
                    <br />
                    <p>Aenean ac quam et risus tincidunt ultrices et sed ligula. Sed <a href="#">consectetur</a> feugiat
                        massa rhoncus pharetra. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Vivamus congue, ex non pellentesque pulvinar, leo nisl egestas diam, ac luctus
                        velit libero sit amet quam. </p>
                    <p>Vivamus iaculis egestas odio, accumsan faucibus enim dictum <a href="">eget</a>. Sed volutpat
                        consequat lacus quis ornare. Ut vel lobortis nisl. Morbi eleifend maximus arcu.</p>
                </div>
            </section>

            <section className={s.row}>
                <header className={s.heading}><h2>Article, Image and Text</h2></header>

                <article className={[s.content, s.post].join(" ")}>
                    <div className={s.post_image}>
                        <Link to={`/post/${id}`}>
                            <div className={s.post_image_bg}></div>
                        </Link>
                    </div>

                    <div className={s.post_info}>
                        <Link to={`/post/${id}`}><h4>web design showcase march</h4></Link>
                        <time dateTime="2016-09-10" className="is-emph">September 10, 2016 | by Regina Radium</time>

                        <div className={[s.desc, "clearfix"].join(" ")}>
                            <img src={require('./img/valley_of_fire.jpg')} alt="" style={{float: "left", marginRight: "1rem"}}/>
                            <p>Aenean ac quam et risus tincidunt ultrices et sed ligula. Sed consectetur feugiat massa rhoncus
                                pharetra. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Vivamus congue, ex non pellentesque pulvinar, leo nisl egestas diam, ac luctus velit libero sit
                                amet quam. Vivamus iaculis egestas odio, accumsan faucibus enim dictum eget. Sed volutpat
                                consequat lacus quis ornare. Ut vel lobortis nisl. Morbi eleifend maximus arcu.</p>

                                <Link to={`/post/${id}`} className={s.link_full_post}>continue reading...</Link>
                        </div>
                    </div>
                </article>
            </section>

            <section className={s.row}>
                <header className={s.heading}><h2>Lists</h2></header>
                
                <div className={s.content}>
                    <p>Aenean ac quam et risus tincidunt ultrices et sed ligula. Sed consectetur feugiat massa rhoncus
                        pharetra. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Vivamus congue, ex non pellentesque pulvinar, leo nisl egestas diam, ac luctus velit libero sit
                        amet quam. </p>

                    <div className="row">
                        <ol>
                            <li>Suspendisse tempus tempor.</li>
                            <li>Duis ligula purus tempus.
                                <ol>
                                    <li>Suspendisse tempus tempor.</li>
                                    <li>Duis ligula purus tempus.</li>
                                    <li>Suspendisse potenti.</li>
                                </ol>
                            </li>
                            <li>Donec nisl nunc, feugiat justo.</li>
                            <li>Suspendisse potenti.</li>
                            <li>Vestibulum luctus gravida libero.</li>
                        </ol>

                        <ul>
                            <li>Suspendisse tempus tempor.</li>
                            <li>Duis ligula purus tempus.
                                <ul>
                                    <li>Suspendisse tempus tempor.</li>
                                    <li>Duis ligula purus tempus.</li>
                                    <li>Suspendisse potenti.</li>
                                </ul>
                            </li>
                            <li>Donec nisl nunc, feugiat justo.</li>
                            <li>Suspendisse potenti.</li>
                            <li>Vestibulum luctus gravida libero.</li>
                        </ul>
                    </div>

                </div>
            </section>

            <section className={s.row}>
                <header className={s.heading}><h2>Table</h2></header>
                
                <div className={s.content}>
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>First column</th>
                            <th>Second column</th>
                            <th>Third column</th>
                            <th>Fourth column</th>
                            <th>Fifth column</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>text</td>
                            <td>text</td>
                            <td>text</td>
                            <td>text</td>
                            <td>text</td>
                            <td>text</td>
                        </tr>
                        <tr>
                            <td>text</td>
                            <td>text</td>
                            <td>text</td>
                            <td>text</td>
                            <td>text</td>
                            <td>text</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </section>

            <section className={s.row}>
                <header className={s.heading}><h2>Blockquote</h2></header>
                
                <div className={s.content}>
                    <blockquote>“Maecenas id ante sed arcu blandit luctus. Duis elit magna, semper non posuere eu,
                        aliquam sed ipsum. Curabitur in viverra mi. Maecenas consequat sit amet quam pretium aliquam.
                        Suspendisse id leo porttitor, scelerisque augue nec, interdum libero. Cras ullamcorper finibus
                        elit, vitae facilisis turpis faucibus ac. Praesent vestibulum, neque ut fringilla facilisis,
                        magna lectus ullamcorper massa, ac imperdiet purus elit et quam. Praesent ut accumsan nisl.”
                    </blockquote>
                </div>
            </section>

            <section className={s.row}>
                <header className={s.heading}><h2>Forms</h2></header>
                
                <div className={s.content}>
                    <input type="text" placeholder="Name"/>

                </div>
            </section>
        </div>
    );
}

export default StyleGuide;