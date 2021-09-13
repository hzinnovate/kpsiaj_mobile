import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
  TextInput,
} from 'react-native'
import { COLORS, FONTS, SIZES, ICONS } from '../../constants'
import { capitalizeEachFirstLetter } from '../helper'

const DropDownField = props => {
  const {
    value,
    loader,
    onTermChange,
    itemList,
    placeholder,
    icon,
    iconFamily,
    iconColor,
    dropdownModalStyle,
    iconStyle,
    style,
    label,
    btnRight,
    onPressBtn,
    editable = true,
    borderActive = true,
    validationStatus,
    validationStatusStyle,
    emptyListMsg,
    error,
    resetField
  } = props

  const [field, setField] = useState('')
  const [list, setList] = useState([])
  const [border, setBorder] = useState(null)

  const [showDropdown, setShowDropdown] = useState(false)
  const [isupdate, setisupdate] = useState(false)


  useEffect(() => {

    // if (value) {
    //   setField(value)
    // }
    if (value === '' && resetField) {
      setField('')
      if (validationStatus) {
        setBorder('red')
      }
    }

    if (value && !field && !isupdate) {
      setField(value)
      setisupdate(true)

    }

    if (editable === false) {
      setShowDropdown(false)
    }
    let arr = []
    if (itemList !== undefined && itemList.length) {
      if (typeof itemList[0] === 'string' || typeof itemList[0] === 'number') {
        for (let index = 0; index < itemList.length; index++) {
          const element = itemList[index];
          arr.push(element)
          // arr.push({
          //   type:element  
          // })
        }
      }
      else if (typeof itemList[0] === 'object') {
        for (let index = 0; index < itemList.length; index++) {
          const element = itemList[index];
          arr.push(element)
        }
      }
    }

    setList(arr)
    if (field && !(typeof field === "number")) {
      let temp = []
      temp = arr.filter(val => {
        let item = typeof val === "object" ? (val.name || val.title || "") : val || ""
        return item.toLowerCase().includes(field.toLowerCase())
      })
      setList(temp)
    }

    if (error && !field) {
      setBorder('red')
    }

  }, [editable, field, error, itemList, value])
  return (

    <View>
      <View style={styles.row1}>
        {!!label && (
          <View>
            <Text style={[styles.label, !editable && { color: COLORS.disabled }]}>
              {label}

            </Text>
          </View>
        )}
        {!!validationStatus && (
          <Text
            style={[
              styles.label,
              validationStatusStyle,
              { color: "red" },
              !editable && { color: COLORS.disabled },
            ]}>
            {' '}
            {validationStatus}
          </Text>
        )}
        {!!loader && (
          <View style={{ padding: 5, paddingRight: 10 }}>
            <ActivityIndicator size={'small'} color='grey' />
          </View>
        )}
        {!!btnRight && (
          <View>
            <TouchableHighlight
              // disabled={editable ? false : true}
              // underlay={"transparent"}
              underlayColor={'transparent'}
              onPress={() => {

                // setBorder(null)
              }}
              onPress={() => {
                // handleSubmit();
                onPressBtn()
                // setShowDropdown(!showDropdown);
              }}
            >
              <Text style={styles.btnRight}>{btnRight}</Text>
            </TouchableHighlight>
          </View>
        )}
      </View>

      <TouchableHighlight
        disabled={!editable}
        onPress={() => {
          setBorder(
            border ? border : error && !field ? 'red' : 'green'
            // validationStatus && !field)?'red':'green'
          ),
            setShowDropdown(!showDropdown)
          !showDropdown ? setField("") : setField(value)

        }}
        style={style}>
        <View
          style={[
            styles.dropdown,
            // !editable && styles.disabledTextInput,
            // error && styles.error,


            // {
            //   ...styles.error, borderColor: border ? border : error && !field ? 'red' : 'transparent',
            //   borderBottomColor: border ? border : error && !field ? 'red' : COLORS.yellow,
            //   borderWidth: border || (error && !field) ? 3 : 2,
            //   borderBottomWidth: border || (error && !field) ? 3 : 2,
            // }

          ]}>
          {/* <Text
            style={
              !editable || !field ? styles.placeholder : field && styles.field
            }>
            {field ? field : placeholder}
          </Text> */}

          <TextInput
            style={{ width: '80%' }}
            onFocus={() => {
              setShowDropdown(true)
              setBorder('green')
              onTermChange("")
            }}
            // onBlur={()=>setBorder(null)}
            // onBlur={() => setShowDropdown(false)}
            value={capitalizeEachFirstLetter(!!field ? field.toString() : "")}
            // autoCapitalize='sentences'
            placeholder={placeholder}
            onChangeText={val => {
              setBorder(!val.length && validationStatus ? 'red' : null),
                setField(val),
                (!!val.length &&
                  setisupdate(true))
              !!val.length && setShowDropdown(true)
            }}
          />
          {
            // border ?
            //   <ICONS.AntDesign
            //     name={field && border === 'green' ? 'checkcircle' : 'closecircle'}
            //     style={{ color: border }}
            //     size={SIZES.calender}
            //   />
            //   :
            //   icon ? (
            //     iconFamily === 'AntDesign' ? (
            //       <ICONS.AntDesign
            //         name={icon}
            //         style={[
            //           styles.arrow_down,
            //           iconStyle,
            //           iconColor && { color: iconColor },
            //         ]}
            //       />
            //     ) : (
            //       <ICONS.MaterialIcons name={icon} color={iconColor} size={20} />
            //     )
            //   ) : 
            (
              <ICONS.AntDesign
                name='down'
                style={[styles.arrow_down, !editable && { color: COLORS.disabled }]}
              />
            )}
        </View>
      </TouchableHighlight>
      {showDropdown && (
        <View>
          <View style={[styles.dropdownModal, dropdownModalStyle]}>
            {list.length ? <FlatList
              nestedScrollEnabled={true}
              initialNumToRender={4}
              keyExtractor={item => (typeof item === 'string' || typeof item === 'number') ? item.toString() : item.id ? item.id.toString() : item._id ? item._id.toString() : Date.now().toString()}
              data={list}
              renderItem={({ item, index }) => {
                return (
                  // <Text>asdasd</Text>
                  <TouchableHighlight
                    onPress={() => {
                      setShowDropdown(false);
                      setField(
                        ((typeof item) === 'string' || (typeof item) === 'number')
                          ? item
                          : (item.name || item.title),
                      );
                      onTermChange(item);
                      setBorder('green')

                      setisupdate(false);
                    }}>
                    <Text style={styles.dropdownItem}>
                      {(typeof item) === 'number' ||
                        (typeof item) === 'string'
                        ? item
                        : (item.name || item.title)}
                    </Text>
                  </TouchableHighlight>
                )
              }}
            /> :
              <Text style={styles.emptyListMsg}>{emptyListMsg}</Text>
            }
          </View>
          {/* </Modal> */}
        </View>
      )}
    </View>
  )
}

export default DropDownField

const styles = StyleSheet.create({
  disabledTextInput: {
    backgroundColor: COLORS.lightGray4,
    // borderBottomColor: COLORS.lightGray1,
    color: COLORS.disabled,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownModal: {
    maxHeight: SIZES.height / 4 + 20,
    minHeight: 'auto',
    backgroundColor: COLORS.light,
    marginTop: -24,
    elevation: 4,
    overflow: 'hidden',
    elevation: 6,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    height: 50,
    alignItems: 'center',
    backgroundColor: COLORS.lightGray4,
    // borderBottomWidth: 2,
    // borderBottomColor: COLORS.lightGray1,
    // borderBottomColor: COLORS.yellow
  },
  arrow_down: {
    color: COLORS.black,
    fontSize: SIZES.arrow_down,
  },
  placeholder: {
    color: COLORS.lightGray1,
    // ...FONTS.h2_r.Poppins,
  },
  field: {
    color: COLORS.black1,
    // ...FONTS.h2_r.Poppins,
    textTransform: 'capitalize',
  },

  dropdownItem: {
    backgroundColor: COLORS.light,
    padding: '4%',
    borderWidth: 1,
    borderColor: COLORS.lightGray3,
    // borderColor:COLORS.yellow,
    height: 50,
    textTransform: 'capitalize'
  },
  active_border: {
    borderWidth: 2,
    borderColor: COLORS.black1,
    borderBottomColor: COLORS.black1,
    borderRadius: 4,
  },
  danger_border: {
    borderWidth: 2,
    borderColor: COLORS.danger,
    borderBottomColor: COLORS.danger,
    borderRadius: 4,
  },
  label: {
    // ...FONTS.body4_r.OpenSans,
    paddingBottom: '2%',
    color: COLORS.gray3,
    lineHeight: 16,
  },
  btnRight: {
    // ...FONTS.h1_b.Poppins,
    color: COLORS.gray3,
    lineHeight: 16,
    letterSpacing: 0.43,
    textAlign: 'right',
  },
  textInputIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    // alignSelf: 'center',
    // marginLeft: -30,
    // height: 50,
    // alignItems: 'flex-end',
    // justifyContent: 'center'
  },
  emptyListMsg: {
    color: COLORS.gray2,
    padding: '4%',
    // ...FONTS.h3_r.Poppins,
  },
  error: { borderWidth: 2, borderColor: 'red', borderBottomWidth: 2, borderBottomColor: 'red' },
})
