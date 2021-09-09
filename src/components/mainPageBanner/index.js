import React from 'react';
import { View, Image, TouchableWithoutFeedback, TouchableHighlight, Text, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { mainPageBannerStyles } from '../../config/StylesCss';
import { images as img } from '../../config/AppConfigData';

const width = Math.round(Dimensions.get('window').width) - 30;
const images = [
    {
        database: true,
        ImageUrl: img.mainPageBanner,
        timeStamp: "58694a0f-3da1-471f-bd96-145571e29d72",
        link: ''
    },
];
class MainPageBanners extends React.Component {
    scrollRef = React.createRef();
    constructor() {
        super();
        this.state = {
            mainPageBanners: [
                {
                    database: true,
                    ImageUrl: img.mainPageBanner,
                    timeStamp: "58694a0f-3da1-471f-bd96-145571e29d72",
                    link: ''
                }
            ],
            selectedIndex: 0
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState(prev => ({ selectedIndex: prev.selectedIndex === this.state.mainPageBanners.length - 1 ? 0 : prev.selectedIndex + 1 }),
                () => {
                    this.scrollRef.current.scrollTo({
                        animated: true,
                        y: 0,
                        x: width * this.state.selectedIndex

                    })
                }
            )
        }, 4000)
    }
    static getDerivedStateFromProps(nextProps) {
        let banners = nextProps.mainPageBanners
        if (banners) {
            let array = []
            for (var key in banners) {
                array.push(banners[key])
            }
            let sorted = array.sort(function (a, b) {
                return a.timeStamp - b.timeStamp;
            });
            var display = sorted.reverse()
            return { mainPageBanners: display }
        } else {
            return { mainPageBanners: images }
        }
    }
    openLink(isLink, isHtml, label, link, html) {
        if (isLink || isHtml) {
            this.props.navigation.navigate('RenderHTMLContainer', { link: !!link ? link : "", htmlData: !!html ? html : "", header: !!label ? label : "" })
        }
    }

    setSelectedIndex = ({ nativeEvent }) => {
        const selectedIndex = Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        this.setState({ selectedIndex })
    }
    render() {
        const { mainPageBanners } = this.state
        return (
            <View style={mainPageBannerStyles.container}>
                <ScrollView
                    onMomentumScrollEnd={this.setSelectedIndex}
                    ref={this.scrollRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    style={mainPageBannerStyles.scroll}
                >
                    {
                        mainPageBanners.map((item, index) => (
                            <TouchableHighlight key={item.timeStamp} onPress={() => { this.openLink(item.isLink, item.isHtml, item.label, item.link, item.html) }} >
                                <Image
                                    style={mainPageBannerStyles.image}
                                    source={!!item.database ? item.ImageUrl : { uri: item.ImageUrl }}
                                />
                            </TouchableHighlight>
                        ))
                    }
                </ScrollView>
                {mainPageBanners.length > 1 && <View style={mainPageBannerStyles.pagination}>
                    {
                        mainPageBanners.map((i, k) => (
                            <Text key={k} style={k === this.state.selectedIndex ? mainPageBannerStyles.pagingActiveText : mainPageBannerStyles.pagingText}>⬤</Text>
                        ))
                    }
                </View>}
            </View>
        );

    }
}

const mapStateToProps = (props) => {
    const { auth, toast, news, general } = props;
    return {
        mainPageBanners: general.mainPageBanners,
    }
}
export default connect(mapStateToProps)(MainPageBanners)
