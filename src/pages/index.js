import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/robot.png";
import thumbnailEvent from "../../static/feature-event.png"
import thumbnailBoard from "../../static/feature-board.png"
import thumbnailNews from "../../static/feature-news.png"
import thumbnailTeams from "../../static/feature-team.png"
import thumbnailStaff from "../../static/feature-user.png"

const IndexPage = () => (
    <Layout>
        <SEO title="Creating Student platforms"/>

        <div className={"page-header home"}>
            <h1>Developer And School Platforms</h1>
            <p>Wozzy provides schools across the globe with innovative solutions to ensure the students are engaged and learning.</p>
            <img alt={"Dashboard"} src={featureImage}/>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Homeschoolzen</h2>
                                <p>Save your time and energy by letting Wozzy manage your events (handle the colleague’s birthday, gathering, etc.), grades, calendars and tasks.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Dockify</h2>
                                <p>Build and deploy all in docker. Innovative docker PAAS to run your applicaitons using docker.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailBoard}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailNews}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Pikmykid</h2>
                                <p>The first and only smart dismissal solution for school districts, charter / private schools, after-school programs, YMCA’s, carpools, and daycare facilities. It connects schools, teachers, and parents through real-time tools to make dismissals safer and more efficient.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Parent messenger</h2>
                                <p>There are better ways to engage parents than via emails, and fliers. At Wozzy we communicate in real-time through push notifications directly to your parent’s device. Do you still want to send emails? You can do both! Our messages are syndicated through an easy to use interface with full accountability.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Team"} src={thumbnailTeams}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Users"} src={thumbnailStaff}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Tip Line</h2>
                                <p>We understand the importance of leveraging technology to empower students and community members to play a part in their own school’s safety. Emergencies can be mitigated proactively if school staff has access to appropriate information that helps them prepare, improve safety.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Sign up for free</h2>
                    <p>Want better education?</p>
                </div>

                <div className={"button"}>
                    <a href="https://app.histaff.io" target={"_blank"}>Get Started</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
