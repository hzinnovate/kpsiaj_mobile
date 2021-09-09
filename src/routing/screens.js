// import { View } from 'react-native';
import {
    AboutContainer,
    ContactUsContainer,
    DonateContainer,
    DownloadsContainer,
    FeedBackContainer,
    GraveSearchContainer,
    HomeContainer,
    NewsEventsContainer,
    ObituaryContainer,
    QuizContainer,
    SettingsContainer,
    TelethonContainer,
    AuthenticationContainer,
    WebContainer,
    RenderHTMLContainer
} from '../containers';

// import BecomeContributorComponent from '../components/becomeContributor'
let initialRouteName = "HomeContainer";

let screens = [
    {
        name: "AboutContainer",
        component: AboutContainer
    },
    {
        name: "ContactUsContainer",
        component: ContactUsContainer
    },
    {
        name: "DonateContainer",
        component: DonateContainer
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
        name: "GraveSearchContainer",
        component: GraveSearchContainer
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
        name: "WebContainer",
        component: WebContainer
    },
    {
        name: "RenderHTMLContainer",
        component: RenderHTMLContainer
    },
]

export {
    screens,
    initialRouteName
}