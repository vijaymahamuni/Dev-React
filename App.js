import React from "react";
import ReactDOM from "react-dom/client";




const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn-icons-png.flaticon.com/512/1590/1590563.png" />

            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )
}
const resList=[{
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                "layout": {
                    "columns": 4
                },
                "id": "restaurant_grid_listing",
                "gridElements": {
                    "infoWithStyle": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                        "restaurants": [
                            {
                                "info": {
                                    "id": "485445",
                                    "name": "Chinese Wok",
                                    "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                                    "locality": "Old Mahabalipuram Road OMR",
                                    "areaName": "Old Mahabalipuram Road OMR",
                                    "costForTwo": "₹250 for two",
                                    "cuisines": [
                                        "Chinese",
                                        "Asian",
                                        "Tibetan",
                                        "Desserts"
                                    ],
                                    "avgRating": 4,
                                    "parentId": "61955",
                                    "avgRatingString": "4.0",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 34,
                                        "lastMileTravel": 4,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "30-35 mins",
                                        "lastMileTravelString": "4.0 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-07-07 02:00:00",
                                        "opened": true
                                    },
                                    "badges": {},
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {},
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "ITEMS",
                                        "subHeader": "AT ₹199"
                                    },
                                    "orderabilityCommunication": {
                                        "title": {},
                                        "subTitle": {},
                                        "message": {},
                                        "customIcon": {}
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {
                                    "context": "seo-data-33cf202c-47ee-4401-af54-9970e64c0095"
                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/chinese-wok-old-mahabalipuram-road-omr-chennai-485445",
                                    "text": "RESTAURANT_MENU",
                                    "type": "WEBLINK"
                                },
                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                            },
                            {
                                "info": {
                                    "id": "678545",
                                    "name": "Wow! Momo",
                                    "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
                                    "locality": "ST. Thomas Mount",
                                    "areaName": "Sholinganallur Signal",
                                    "costForTwo": "₹300 for two",
                                    "cuisines": [
                                        "Tibetan",
                                        "Healthy Food",
                                        "Asian",
                                        "Chinese",
                                        "Snacks",
                                        "Continental",
                                        "Desserts",
                                        "Beverages"
                                    ],
                                    "avgRating": 4,
                                    "parentId": "1776",
                                    "avgRatingString": "4.0",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 30,
                                        "lastMileTravel": 1.6,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "25-30 mins",
                                        "lastMileTravelString": "1.6 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-07-07 03:00:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "Rxawards/_CATEGORY-Chinese.png",
                                                "description": "Delivery!"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "Delivery!",
                                                            "imageId": "Rxawards/_CATEGORY-Chinese.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "ITEMS",
                                        "subHeader": "AT ₹99"
                                    },
                                    "orderabilityCommunication": {
                                        "title": {},
                                        "subTitle": {},
                                        "message": {},
                                        "customIcon": {}
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {
                                    "context": "seo-data-33cf202c-47ee-4401-af54-9970e64c0095"
                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/wow-momo-st-thomas-mount-sholinganallur-signal-chennai-678545",
                                    "text": "RESTAURANT_MENU",
                                    "type": "WEBLINK"
                                },
                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                            },
                            {
                                "info": {
                                    "id": "307780",
                                    "name": "Barbeque Nation",
                                    "cloudinaryImageId": "ajmtkvs0nhmk4fhcxwjf",
                                    "locality": "Thuraipakkam",
                                    "areaName": "Thuraipakkam",
                                    "costForTwo": "₹600 for two",
                                    "cuisines": [
                                        "North Indian",
                                        "Barbecue",
                                        "Biryani",
                                        "Kebabs",
                                        "Mughlai",
                                        "Desserts"
                                    ],
                                    "avgRating": 3.9,
                                    "parentId": "2438",
                                    "avgRatingString": "3.9",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 39,
                                        "lastMileTravel": 6.5,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "35-40 mins",
                                        "lastMileTravelString": "6.5 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-07-06 23:30:00",
                                        "opened": true
                                    },
                                    "badges": {},
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {},
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "20% OFF",
                                        "discountTag": "FLAT DEAL"
                                    },
                                    "orderabilityCommunication": {
                                        "title": {},
                                        "subTitle": {},
                                        "message": {},
                                        "customIcon": {}
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {
                                    "context": "seo-data-33cf202c-47ee-4401-af54-9970e64c0095"
                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/barbeque-nation-thuraipakkam-chennai-307780",
                                    "text": "RESTAURANT_MENU",
                                    "type": "WEBLINK"
                                },
                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                            },
                            {
                                "info": {
                                    "id": "674382",
                                    "name": "Aasife Biriyani",
                                    "cloudinaryImageId": "be2bfa3b5dde1e71b41144e9b62878a9",
                                    "locality": "Ramraj Cotton Showroom",
                                    "areaName": "Pallikaranai",
                                    "costForTwo": "₹499 for two",
                                    "cuisines": [
                                        "Indian",
                                        "Biryani",
                                        "Chettinad"
                                    ],
                                    "avgRating": 4.1,
                                    "parentId": "1265",
                                    "avgRatingString": "4.1",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 35,
                                        "lastMileTravel": 5.6,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "35-40 mins",
                                        "lastMileTravelString": "5.6 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-07-07 03:00:00",
                                        "opened": true
                                    },
                                    "badges": {},
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {},
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "20% OFF",
                                        "subHeader": "UPTO ₹100"
                                    },
                                    "orderabilityCommunication": {
                                        "title": {},
                                        "subTitle": {},
                                        "message": {},
                                        "customIcon": {}
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {
                                    "context": "seo-data-33cf202c-47ee-4401-af54-9970e64c0095"
                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/aasife-biriyani-ramraj-cotton-showroom-pallikaranai-chennai-674382",
                                    "text": "RESTAURANT_MENU",
                                    "type": "WEBLINK"
                                },
                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                            },
                            {
                                "info": {
                                    "id": "498242",
                                    "name": "Five Star Chicken",
                                    "cloudinaryImageId": "y3gjdrxhcaappyzluoao",
                                    "locality": "Madambakkam, Sudharshan Nagar",
                                    "areaName": "Madambakkam",
                                    "costForTwo": "₹200 for two",
                                    "cuisines": [
                                        "North Indian",
                                        "American",
                                        "Snacks"
                                    ],
                                    "avgRating": 4.2,
                                    "parentId": "376",
                                    "avgRatingString": "4.2",
                                    "totalRatingsString": "100+",
                                    "sla": {
                                        "deliveryTime": 51,
                                        "lastMileTravel": 8.9,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "50-55 mins",
                                        "lastMileTravelString": "8.9 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-07-06 23:56:00",
                                        "opened": true
                                    },
                                    "badges": {},
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {},
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "10% OFF",
                                        "subHeader": "ABOVE ₹1000",
                                        "discountTag": "FLAT DEAL"
                                    },
                                    "orderabilityCommunication": {
                                        "title": {},
                                        "subTitle": {},
                                        "message": {},
                                        "customIcon": {}
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {
                                    "context": "seo-data-33cf202c-47ee-4401-af54-9970e64c0095"
                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/five-star-chicken-sudharshan-nagar-madambakkam-chennai-498242",
                                    "text": "RESTAURANT_MENU",
                                    "type": "WEBLINK"
                                },
                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                            },
                            {
                                "info": {
                                    "id": "64700",
                                    "name": "Ambur Star Briyani",
                                    "cloudinaryImageId": "83650e6ca1465c58063a70ad22be4f28",
                                    "locality": "Sholinganallur",
                                    "areaName": "Sholinganallur",
                                    "costForTwo": "₹500 for two",
                                    "cuisines": [
                                        "Indian",
                                        "Chinese",
                                        "Arabian",
                                        "Continental"
                                    ],
                                    "avgRating": 4.3,
                                    "parentId": "5455",
                                    "avgRatingString": "4.3",
                                    "totalRatingsString": "10K+",
                                    "sla": {
                                        "deliveryTime": 17,
                                        "lastMileTravel": 1.5,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "15-20 mins",
                                        "lastMileTravelString": "1.5 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-07-07 02:30:00",
                                        "opened": true
                                    },
                                    "badges": {},
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {},
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "40% OFF",
                                        "subHeader": "UPTO ₹80"
                                    },
                                    "orderabilityCommunication": {
                                        "title": {},
                                        "subTitle": {},
                                        "message": {},
                                        "customIcon": {}
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {
                                    "context": "seo-data-33cf202c-47ee-4401-af54-9970e64c0095"
                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/ambur-star-briyani-sholinganallur-chennai-64700",
                                    "text": "RESTAURANT_MENU",
                                    "type": "WEBLINK"
                                },
                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                            },
                            {
                                "info": {
                                    "id": "748065",
                                    "name": "Burger King",
                                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_748065.JPG",
                                    "locality": "OMR Semmanchey",
                                    "areaName": "Kancheepuram",
                                    "costForTwo": "₹350 for two",
                                    "cuisines": [
                                        "Burgers",
                                        "American"
                                    ],
                                    "avgRating": 4.3,
                                    "parentId": "166",
                                    "avgRatingString": "4.3",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 26,
                                        "lastMileTravel": 3.7,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "25-30 mins",
                                        "lastMileTravelString": "3.7 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-07-07 03:00:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "Rxawards/_CATEGORY-Burger.png",
                                                "description": "Delivery!"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "Delivery!",
                                                            "imageId": "Rxawards/_CATEGORY-Burger.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "50% OFF",
                                        "subHeader": "UPTO ₹100"
                                    },
                                    "orderabilityCommunication": {
                                        "title": {},
                                        "subTitle": {},
                                        "message": {},
                                        "customIcon": {}
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {
                                    "context": "seo-data-33cf202c-47ee-4401-af54-9970e64c0095"
                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/burger-king-omr-semmanchey-kancheepuram-chennai-748065",
                                    "text": "RESTAURANT_MENU",
                                    "type": "WEBLINK"
                                },
                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                            },
                            {
                                "info": {
                                    "id": "698364",
                                    "name": "McDonald's",
                                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/0ed62bec-fb43-4815-8462-b1ff1fca6f1c_698364.jpg",
                                    "locality": "Perumbakkam",
                                    "areaName": "Sekaran Mall",
                                    "costForTwo": "₹400 for two",
                                    "cuisines": [
                                        "Burgers",
                                        "Beverages",
                                        "Cafe",
                                        "Desserts"
                                    ],
                                    "avgRating": 4.4,
                                    "parentId": "630",
                                    "avgRatingString": "4.4",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 32,
                                        "lastMileTravel": 2.2,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "30-35 mins",
                                        "lastMileTravelString": "2.2 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-07-06 22:45:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "Rxawards/_CATEGORY-Burger.png",
                                                "description": "Delivery!"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "Delivery!",
                                                            "imageId": "Rxawards/_CATEGORY-Burger.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "40% OFF",
                                        "subHeader": "UPTO ₹80"
                                    },
                                    "orderabilityCommunication": {
                                        "title": {},
                                        "subTitle": {},
                                        "message": {},
                                        "customIcon": {}
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {
                                    "context": "seo-data-33cf202c-47ee-4401-af54-9970e64c0095"
                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/mcdonalds-perumbakkam-sekaran-mall-chennai-698364",
                                    "text": "RESTAURANT_MENU",
                                    "type": "WEBLINK"
                                },
                                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                            }
                        ],
                        "theme": "SeoRestaurantListingGridWidget"
                    }
                }
            }
        }
    },
	]
const RestroCard=(resData)=>{
    return(
        <div className="restau-container">
            <div className="search-box">
                <h1>Search</h1>

            </div>
            <div className="restau-card">
                <img className="restau-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/be2bfa3b5dde1e71b41144e9b62878a9"/>
                <h2>Aasife Biriyani</h2>
                <h3>4.1 stars</h3>
                <h3>30-40 mins</h3>
               
            </div>
            </div>
    )

}
const MainLayout=()=>{
    return(
        <div>
            <Header />

            {resList.map((cardData, index) => (
        <RestroCard key={index} resData={cardData}/>

      ))}
       



        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MainLayout />
);
