import {
    ContactUsContainer,
    DownloadsContainer,
    FeedBackContainer,
    HomeContainer,
    NewsEventsContainer,
    ObituaryContainer,
    QuizContainer,
    SettingsContainer,
    TelethonContainer,
    AuthenticationContainer,
    RenderHTMLContainer,
    MediaContainer,
} from '../containers';

let initialRouteName = "HomeContainer";

let screens = [
    {
        name: "ContactUsContainer",
        component: ContactUsContainer
    },
    {
        name: "DownloadsContainer",
        component: DownloadsContainer
    },
    {
        name: "FeedBackContainer",
        component: FeedBackContainer
    },
    {
        name: "HomeContainer",
        component: HomeContainer
    },
    {
        name: "NewsEventsContainer",
        component: NewsEventsContainer
    },
    {
        name: "ObituaryContainer",
        component: ObituaryContainer
    },
    {
        name: "QuizContainer",
        component: QuizContainer
    },
    {
        name: "SettingsContainer",
        component: SettingsContainer
    },
    {
        name: "TelethonContainer",
        component: TelethonContainer
    },
    {
        name: "AuthenticationContainer",
        component: AuthenticationContainer
    },
    {
        name: "RenderHTMLContainer",
        component: RenderHTMLContainer
    },
    {
        name: "MediaContainer",
        component: MediaContainer
    },
]

export {
    screens,
    initialRouteName
}