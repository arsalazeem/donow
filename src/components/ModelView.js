import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
const ModelView = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
  
    const showModal = () => {
      setModalVisible(true);
    };
  
    const hideModal = () => {
      setModalVisible(false);
    };
  
    return (
      <View>
        <TouchableOpacity onPress={showModal}>
          <Text>Open Modal</Text>
        </TouchableOpacity>
        <Modal visible={modalVisible} onRequestClose={hideModal}>
          <View>
            <Text>{props.title}</Text>
            <TouchableOpacity onPress={hideModal}>
              <Text>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };
  
  export default ModelView;