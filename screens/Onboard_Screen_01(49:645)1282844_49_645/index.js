import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_49_653}>
        <View style={styles.View_I49_653_9_943}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/077704f7-333b-49bd-b863-d6019b8ec43b"
            }}
            style={styles.ImageBackground_I49_653_9_944}
          />
          <View style={styles.View_I49_653_9_949}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5139d4c3-ebcb-4049-8f6a-19ec51445c93"
              }}
              style={styles.ImageBackground_I49_653_9_950}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f72aa0f-5b5e-4c84-9f23-e7e698ed0967"
              }}
              style={styles.ImageBackground_I49_653_9_954}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aebc90fd-f7d7-46ad-96ad-30fabbc463d9"
              }}
              style={styles.ImageBackground_I49_653_9_958}
            />
          </View>
          <View style={styles.View_I49_653_9_965}>
            <View style={styles.View_I49_653_9_966}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f23620b0-ffa5-4c30-abac-ab60b8daa22a"
                }}
                style={styles.ImageBackground_I49_653_9_967}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_49_664}>
        <View style={styles.View_I49_664_14_1352}>
          <View style={styles.View_I49_664_14_1352_9_1042}>
            <View style={styles.View_I49_664_14_1352_9_1043} />
          </View>
        </View>
      </View>
      <View style={styles.View_50_978}>
        <View style={styles.View_50_979}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f360ee07-db18-4798-91b9-1f9e883fe96e"
            }}
            style={styles.ImageBackground_50_980}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ba07b71-3150-4954-b1c6-cf521beb5903"
            }}
            style={styles.ImageBackground_50_981}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfd808de-b035-4012-b09d-d826302544b7"
            }}
            style={styles.ImageBackground_50_982}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e522fe8b-d915-4857-beb2-b29d98b6b2f7"
            }}
            style={styles.ImageBackground_50_983}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14ce120d-d20f-46aa-81df-f8afcb388c92"
            }}
            style={styles.ImageBackground_50_984}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19aa325f-4c3f-41a4-8d3a-f82fc7b64e74"
            }}
            style={styles.ImageBackground_50_985}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dec9cdba-f081-4d5e-8540-1b2acb0dbf61"
            }}
            style={styles.ImageBackground_50_986}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/acb0b1e8-ca25-41b8-8224-e56b973bb61d"
            }}
            style={styles.ImageBackground_50_987}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/030a3936-5b97-4017-ab76-569dd10a8170"
            }}
            style={styles.ImageBackground_50_988}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e8ee73d-fcf8-4a70-bc20-911b8524a873"
            }}
            style={styles.ImageBackground_50_989}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/957748ca-ea65-4841-923d-85c94510d09a"
            }}
            style={styles.ImageBackground_50_990}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad7b7d39-5b77-4960-808c-b1b03b197316"
            }}
            style={styles.ImageBackground_50_991}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/def50f9f-b93a-4928-8798-20a6a5946367"
            }}
            style={styles.ImageBackground_50_992}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed476b16-6abf-44eb-afa9-ff8ddd8f7cf2"
            }}
            style={styles.ImageBackground_50_993}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9469d7f3-68e4-4760-958e-eea715cb3933"
            }}
            style={styles.ImageBackground_50_994}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43d6252c-6698-4216-93c4-b279b31719ba"
            }}
            style={styles.ImageBackground_50_995}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f79ddbbf-7998-4297-ae2e-0c3074a74098"
            }}
            style={styles.ImageBackground_50_996}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2a446c0-5ead-4379-a0e4-7c240c15e581"
            }}
            style={styles.ImageBackground_50_997}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19b7149b-87a4-4ce3-ad25-3fa2f9bc42b2"
            }}
            style={styles.ImageBackground_50_998}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d69398d-ff3c-46f7-8b3d-3293f426ca25"
            }}
            style={styles.ImageBackground_50_999}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41c78abd-8f17-4cf1-a423-03fd9191e0b1"
            }}
            style={styles.ImageBackground_50_1000}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe06cfe8-94f1-4fe3-878d-434059874205"
            }}
            style={styles.ImageBackground_50_1001}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a53567d3-658a-4f3f-8f4c-3ebf28a43791"
            }}
            style={styles.ImageBackground_50_1002}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d49612f1-708d-43d5-ba6f-a3ed6fca51bc"
            }}
            style={styles.ImageBackground_50_1003}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3a89709-6983-47a5-83b6-97960e5a8a08"
            }}
            style={styles.ImageBackground_50_1004}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/851ff8a1-f0a2-4d77-a3c4-fe624d0d46a2"
            }}
            style={styles.ImageBackground_50_1005}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14d8568a-b0d9-4730-aa3b-25d5ea5858cc"
            }}
            style={styles.ImageBackground_50_1006}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c16bb65-d9b1-436e-951f-4c844155e3bf"
            }}
            style={styles.ImageBackground_50_1007}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d35ea642-bd22-43b2-afe1-24a58ef4ef3a"
            }}
            style={styles.ImageBackground_50_1008}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fb13994-d585-4ba3-8b31-7bf92c1b541b"
            }}
            style={styles.ImageBackground_50_1009}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d10fdbc-804f-4a10-8c42-fa00e2b3d0a4"
            }}
            style={styles.ImageBackground_50_1010}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/502f4cb6-a8f0-4a90-b4f3-b825a00c6229"
            }}
            style={styles.ImageBackground_50_1011}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7036c8c-c161-40bd-96d2-1f05b0f3cfab"
            }}
            style={styles.ImageBackground_50_1012}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1797227d-fb73-42f0-930c-c3693eeb2f10"
            }}
            style={styles.ImageBackground_50_1013}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a306ae57-df6b-490a-8402-b2efc0a08361"
            }}
            style={styles.ImageBackground_50_1014}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94075d5f-49d9-4012-a393-f610928723a6"
            }}
            style={styles.ImageBackground_50_1015}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d027789-7115-4e4d-93aa-c85143405d3a"
            }}
            style={styles.ImageBackground_50_1016}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f191f09-0b09-46db-a080-279224e94c64"
            }}
            style={styles.ImageBackground_50_1017}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/559c690d-a228-42de-9bab-69506546167f"
            }}
            style={styles.ImageBackground_50_1018}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f836ac16-57ae-4e00-b720-b2a0613596b1"
            }}
            style={styles.ImageBackground_50_1019}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef209739-d21f-4001-b61b-b7330262145f"
            }}
            style={styles.ImageBackground_50_1020}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c20f3fad-8b4f-4293-aa8d-40998f64059f"
            }}
            style={styles.ImageBackground_50_1021}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9ccd830-d6a0-4fbc-8634-67e6074acedc"
            }}
            style={styles.ImageBackground_50_1022}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b0eaec2-6351-4778-b322-9b84e4509270"
            }}
            style={styles.ImageBackground_50_1023}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30a0378b-7840-44a6-bb39-f0f92c11ac5a"
            }}
            style={styles.ImageBackground_50_1024}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09c8881a-1ff2-4c00-8ad5-6c3dd693dcb8"
            }}
            style={styles.ImageBackground_50_1025}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3681a2a3-9205-450e-976b-58a2580e7b6a"
            }}
            style={styles.ImageBackground_50_1026}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c10fca3b-d913-48cb-9753-f964b3421aa3"
            }}
            style={styles.ImageBackground_50_1027}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fdc2e9bc-c042-48ca-81a5-6a746fe18897"
            }}
            style={styles.ImageBackground_50_1028}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a6845ea-fe96-4d42-b6f4-ff4f5e6b33a4"
            }}
            style={styles.ImageBackground_50_1029}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c95e028a-e5fb-4f76-9fa5-a22af0b625e1"
            }}
            style={styles.ImageBackground_50_1030}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90bf901a-33d8-4a57-8f3b-051a5a00e624"
            }}
            style={styles.ImageBackground_50_1031}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8fb6538-e038-461a-8a65-b682eee7fa33"
            }}
            style={styles.ImageBackground_50_1032}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/262a4b54-7868-4794-ac9a-c06e7f6bc877"
            }}
            style={styles.ImageBackground_50_1033}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b85b264-b24e-4009-8486-835d1c6595e8"
            }}
            style={styles.ImageBackground_50_1034}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1fc896b3-fb86-4f30-bdd0-a526acbfa99f"
            }}
            style={styles.ImageBackground_50_1035}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6570e899-59c8-45b8-9f9a-caa69e36bf4b"
            }}
            style={styles.ImageBackground_50_1036}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84b47bca-b7f8-4be3-80fd-1f8fa3b49f2c"
            }}
            style={styles.ImageBackground_50_1037}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd87dd20-303f-40a7-9842-869cb71796e6"
            }}
            style={styles.ImageBackground_50_1038}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab6b07fc-41b3-4208-a4dc-2e25d2d79737"
            }}
            style={styles.ImageBackground_50_1039}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa6ce7f2-af1d-41af-bc29-5997569b7608"
            }}
            style={styles.ImageBackground_50_1040}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b4221a0-7f23-4b6d-8f2b-24865056349d"
            }}
            style={styles.ImageBackground_50_1041}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9476ea48-1714-4cee-b710-d194d4fbd641"
            }}
            style={styles.ImageBackground_50_1042}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ffe80b7d-9b70-4c71-aadb-575b081c00fa"
            }}
            style={styles.ImageBackground_50_1043}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/283118a4-ed82-4f11-9399-63df742b4462"
            }}
            style={styles.ImageBackground_50_1044}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98bc10b3-53b1-44c4-93be-5f2a512a351e"
            }}
            style={styles.ImageBackground_50_1045}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0010de34-733b-438a-afc0-6d40639bec0b"
            }}
            style={styles.ImageBackground_50_1046}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97ca7767-d6ea-455d-87e9-da1485234f51"
            }}
            style={styles.ImageBackground_50_1047}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3c31a58-a872-4afd-ade0-160751375a5a"
            }}
            style={styles.ImageBackground_50_1048}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e9dab28-4509-4a7d-b6d6-571b6399f755"
            }}
            style={styles.ImageBackground_50_1049}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8cff9848-c6cf-45af-9bfc-c1c6508e5deb"
            }}
            style={styles.ImageBackground_50_1050}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/762cabd6-3c0e-4c29-bed6-2c1a7bc6a2ba"
            }}
            style={styles.ImageBackground_50_1051}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d35ad478-9e44-4d91-bf70-8f9cbcbb411d"
            }}
            style={styles.ImageBackground_50_1052}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a25a9a8f-3d96-4d06-8ddc-6a8e6b56eddd"
            }}
            style={styles.ImageBackground_50_1053}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5c9b8f8-8fdb-46e6-b15e-790c27a9252d"
            }}
            style={styles.ImageBackground_50_1054}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69268ce2-7c4c-4375-a80f-f61b1a0d5fc6"
            }}
            style={styles.ImageBackground_50_1055}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79936a07-6f55-414b-9a41-4ad2e25d6dec"
            }}
            style={styles.ImageBackground_50_1056}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0c45895-c1cd-4a09-9adf-cca2f4a0c80a"
            }}
            style={styles.ImageBackground_50_1057}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c180fd2f-e9b3-40e0-9407-dfb6414f48a0"
            }}
            style={styles.ImageBackground_50_1058}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9525ccf-7236-4e0a-a40f-c4fdfe890334"
            }}
            style={styles.ImageBackground_50_1059}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/acbdaf33-2803-44a0-b809-a486472d6a2f"
            }}
            style={styles.ImageBackground_50_1060}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a653933-15d8-441b-b663-3d2fd35460e5"
            }}
            style={styles.ImageBackground_50_1061}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19bd90c0-b8a3-4bfe-8d52-8df48c6a81d0"
            }}
            style={styles.ImageBackground_50_1062}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a3957a9-6a68-49ee-bc36-bcf8feb7b3be"
            }}
            style={styles.ImageBackground_50_1063}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/601b2739-60aa-4f48-981a-383c0ae48a29"
            }}
            style={styles.ImageBackground_50_1064}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f13e6bf9-f5e3-4d9a-84f2-9ea0874a5066"
            }}
            style={styles.ImageBackground_50_1065}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d63c5e6-1a6c-4007-b95c-861771416e5d"
            }}
            style={styles.ImageBackground_50_1066}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed1a2a8c-78ad-458f-94b6-54acdeb2a5fe"
            }}
            style={styles.ImageBackground_50_1067}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e428000-22cf-41e7-a2fe-2233a487b26b"
            }}
            style={styles.ImageBackground_50_1068}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50cc242a-4056-4c31-8f51-81763db779f4"
            }}
            style={styles.ImageBackground_50_1069}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f12d06e-9f28-4355-bb1e-55446bf83450"
            }}
            style={styles.ImageBackground_50_1070}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af251f55-daba-4de8-a304-4a00747789f8"
            }}
            style={styles.ImageBackground_50_1071}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b51d7a02-26f2-4537-8489-9e187ee72467"
            }}
            style={styles.ImageBackground_50_1072}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b724398-4161-47eb-9166-6bcfe8b7ff9a"
            }}
            style={styles.ImageBackground_50_1073}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a9b4b7b-bb79-4cfe-9408-272a8a1eab54"
            }}
            style={styles.ImageBackground_50_1074}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ffc2bea3-fea9-44b3-8693-7589cef94265"
            }}
            style={styles.ImageBackground_50_1075}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ba5facd-c7c9-46e7-abe9-6bbc3be0b63b"
            }}
            style={styles.ImageBackground_50_1076}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c8e4f9f-db07-4e74-9fc9-0fefb48ddbdf"
            }}
            style={styles.ImageBackground_50_1077}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2a092b1-c654-4802-97c9-61a78c29a618"
            }}
            style={styles.ImageBackground_50_1078}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ceab2faa-a21e-48e6-a146-bcd90565d7d2"
            }}
            style={styles.ImageBackground_50_1079}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d15ea624-4957-41ca-bf10-794d2ed0f195"
            }}
            style={styles.ImageBackground_50_1080}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5495f94c-0b77-403f-8671-2fc615aa196a"
            }}
            style={styles.ImageBackground_50_1081}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cae8b267-22af-4b41-aec5-2cbcc01b26dc"
            }}
            style={styles.ImageBackground_50_1082}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e2a903f-e5c8-45a4-8b1f-53b8090388c1"
            }}
            style={styles.ImageBackground_50_1083}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98ac9b31-8bfa-4e7b-b17f-42a296e8124a"
            }}
            style={styles.ImageBackground_50_1084}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4596d292-98a7-4558-a590-9821e0f42182"
            }}
            style={styles.ImageBackground_50_1085}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90f1c3e6-0524-44dd-bd2e-ff85023bffbf"
            }}
            style={styles.ImageBackground_50_1086}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4d114ec-f288-479b-a4dd-51a6feda029e"
            }}
            style={styles.ImageBackground_50_1089}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3fc5c873-ad18-4693-9f94-4e350aaa23bd"
            }}
            style={styles.ImageBackground_50_1090}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7350d86-9968-4ddf-a983-071e55c73d23"
            }}
            style={styles.ImageBackground_50_1091}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/355a043c-7a8f-458a-8a79-40059244d6d8"
            }}
            style={styles.ImageBackground_50_1092}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d765b9b3-1390-49e5-849e-95b506ddf679"
            }}
            style={styles.ImageBackground_50_1093}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b2d6ead-441e-4909-9775-68e6095cce09"
            }}
            style={styles.ImageBackground_50_1094}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ecd011a2-bf37-441a-8ef9-07e10dcb7931"
            }}
            style={styles.ImageBackground_50_1095}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0333543c-df4b-4ae1-9c9e-d468dd7b0845"
            }}
            style={styles.ImageBackground_50_1096}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e9de575-2fa1-4ce9-8df7-35ba5d7b9a0f"
            }}
            style={styles.ImageBackground_50_1097}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d4109f2-16ec-4cf3-ad65-005b261f0c5c"
            }}
            style={styles.ImageBackground_50_1098}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d8c58e7-7251-43b1-a7ab-dbb6a7ceba22"
            }}
            style={styles.ImageBackground_50_1099}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3fac091-f204-48eb-9d9b-106fde015d83"
            }}
            style={styles.ImageBackground_50_1100}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdb7cc32-52c7-4828-89b1-97cbf8cef392"
            }}
            style={styles.ImageBackground_50_1101}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bfb6376-a02b-46aa-a185-13cfa8f113d4"
            }}
            style={styles.ImageBackground_50_1102}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/892d9795-25fd-463d-a595-135da93ce1e7"
            }}
            style={styles.ImageBackground_50_1103}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e7a4641-8046-4008-89f4-227f233bd1c0"
            }}
            style={styles.ImageBackground_50_1104}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fcab19da-e5a7-44ad-9528-3fe19b303679"
            }}
            style={styles.ImageBackground_50_1105}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/964a1df4-978b-4067-8cba-64077a980609"
            }}
            style={styles.ImageBackground_50_1106}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f666cc63-ec87-4922-a770-60937e9265b0"
            }}
            style={styles.ImageBackground_50_1107}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ee4aab8-bb7a-40d8-8e23-f51c72cf2493"
            }}
            style={styles.ImageBackground_50_1108}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64dc1b99-483d-4303-bb78-6f70d99a6562"
            }}
            style={styles.ImageBackground_50_1109}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e9a1a7b-c8e0-4702-a1cf-a32dd89eab30"
            }}
            style={styles.ImageBackground_50_1110}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dfc5fd97-b5a8-4345-aa24-f9c8ac31ce29"
            }}
            style={styles.ImageBackground_50_1111}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d14d130e-7548-4c25-b2ec-4e009eb5a1f9"
            }}
            style={styles.ImageBackground_50_1112}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89175bd8-9e0a-4268-a0ce-620d11c60c2d"
            }}
            style={styles.ImageBackground_50_1113}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c030035-0fb4-4d23-ba39-88f88571f8a6"
            }}
            style={styles.ImageBackground_50_1114}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/836b7d76-592f-4acc-ba35-c7d2ff1e7f32"
            }}
            style={styles.ImageBackground_50_1115}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c44c7495-2a91-4568-b576-c7f27a85ffdf"
            }}
            style={styles.ImageBackground_50_1116}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33dcef82-7ef6-4181-a695-b07df0c23f72"
            }}
            style={styles.ImageBackground_50_1117}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36b13a22-c93b-4c93-9ab6-f558e75022a2"
            }}
            style={styles.ImageBackground_50_1118}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4acf51e5-bf91-4782-b599-8ee6ba80b163"
            }}
            style={styles.ImageBackground_50_1119}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/732846f6-9ce4-4cf7-b62e-496870c978a7"
            }}
            style={styles.ImageBackground_50_1120}
          />
        </View>
      </View>
      <View style={styles.View_51_1121}>
        <Text style={styles.Text_51_1121}>The Crypto Wallet for Everyone</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92666cea-0b76-4b37-81d7-41a0fcb7d19a"
        }}
        style={styles.ImageBackground_51_1122}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c94daedd-8663-4f41-a8d2-e538b07bc884"
        }}
        style={styles.ImageBackground_51_1134}
      />
      <View style={styles.View_51_1138}>
        <View style={styles.View_51_1139}>
          <View style={styles.View_I51_1139_14_1344}>
            <Text style={styles.Text_I51_1139_14_1344}>
              Create a New Wallet
            </Text>
          </View>
        </View>
        <View style={styles.View_51_1140}>
          <Text style={styles.Text_51_1140}>I already have a wallet</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_49_653: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I49_653_9_943: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I49_653_9_944: {
    width: wp("58%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%")
  },
  View_I49_653_9_949: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  ImageBackground_I49_653_9_950: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_I49_653_9_954: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_I49_653_9_958: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I49_653_9_965: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_I49_653_9_966: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I49_653_9_967: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_49_664: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I49_664_14_1352: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I49_664_14_1352_9_1042: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I49_664_14_1352_9_1043: {
    width: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(228, 228, 228, 1)"
  },
  View_50_978: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("48%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_50_979: {
    width: wp("86%"),
    height: hp("25%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%")
  },
  ImageBackground_50_980: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_50_981: {
    width: wp("12%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_50_982: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_50_983: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_50_984: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_50_985: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_50_986: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_50_987: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_50_988: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_50_989: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_50_990: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_50_991: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_50_992: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_50_993: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_50_994: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_50_995: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_50_996: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_50_997: {
    width: wp("13%"),
    height: hp("8%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_50_998: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_50_999: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_50_1000: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_50_1001: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_50_1002: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_50_1003: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_50_1004: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_50_1005: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_50_1006: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_50_1007: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_50_1008: {
    width: wp("10%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_50_1009: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_50_1010: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_50_1011: {
    width: wp("6%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_50_1012: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_50_1013: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_50_1014: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_50_1015: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_50_1016: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_50_1017: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_50_1018: {
    width: wp("19%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_50_1019: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_50_1020: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_50_1021: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_50_1022: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_50_1023: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_50_1024: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_50_1025: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_50_1026: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_50_1027: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_50_1028: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_50_1029: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_50_1030: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_50_1031: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_50_1032: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_50_1033: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_50_1034: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_50_1035: {
    width: wp("7%"),
    height: hp("7%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_50_1036: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_50_1037: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_50_1038: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_50_1039: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_50_1040: {
    width: wp("6%"),
    height: hp("0%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_50_1041: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_50_1042: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_50_1043: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_50_1044: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_50_1045: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_50_1046: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_50_1047: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_50_1048: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_50_1049: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_50_1050: {
    width: wp("16%"),
    height: hp("9%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_50_1051: {
    width: wp("16%"),
    height: hp("9%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_50_1052: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_50_1053: {
    width: wp("6%"),
    height: hp("11%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_50_1054: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_50_1055: {
    width: wp("19%"),
    height: hp("5%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_50_1056: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_50_1057: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_50_1058: {
    width: wp("1%"),
    height: hp("7%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_50_1059: {
    width: wp("1%"),
    height: hp("8%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_50_1060: {
    width: wp("9%"),
    height: hp("12%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_50_1061: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_50_1062: {
    width: wp("8%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_50_1063: {
    width: wp("8%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_50_1064: {
    width: wp("8%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_50_1065: {
    width: wp("11%"),
    height: hp("9%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_50_1066: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_50_1067: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_50_1068: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_50_1069: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_50_1070: {
    width: wp("11%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_50_1071: {
    width: wp("11%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_50_1072: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_50_1073: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_50_1074: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_50_1075: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_50_1076: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_50_1077: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_50_1078: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_50_1079: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_50_1080: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_50_1081: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_50_1082: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_50_1083: {
    width: wp("23%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_50_1084: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_50_1085: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_50_1086: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_50_1089: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_50_1090: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_50_1091: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_50_1092: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_50_1093: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_50_1094: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_50_1095: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_50_1096: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_50_1097: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_50_1098: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  ImageBackground_50_1099: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_50_1100: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_50_1101: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_50_1102: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_50_1103: {
    width: wp("10%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_50_1104: {
    width: wp("27%"),
    height: hp("6%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  ImageBackground_50_1105: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_50_1106: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  ImageBackground_50_1107: {
    width: wp("13%"),
    height: hp("3%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  ImageBackground_50_1108: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_50_1109: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_50_1110: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_50_1111: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_50_1112: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_50_1113: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_50_1114: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_50_1115: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_50_1116: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_50_1117: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_50_1118: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_50_1119: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_50_1120: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_51_1121: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_51_1121: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_51_1122: {
    width: wp("36%"),
    height: hp("5%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_51_1134: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("85%")
  },
  View_51_1138: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("90%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_1139: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 0, 131, 1)",
    overflow: "hidden"
  },
  View_I51_1139_14_1344: {
    flexGrow: 1,
    width: wp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I51_1139_14_1344: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_1140: {
    width: wp("42%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_51_1140: {
    color: "rgba(255, 0, 131, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
