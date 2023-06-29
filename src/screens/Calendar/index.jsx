import { View, Modal, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { CalendarList } from "react-native-calendars";
import Colors from "../../constants/Colors";
import EventsList from "../../data/EventsList";
import { datesList } from "../../data/EventsList";

const CalendarScreen = () => {
  const [selectedEvent, setSelectedEvent] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleDayPress = (day) => {
    const date = day.dateString;
    const matchEvent = EventsList.find((event) => event.date === date);
    if (matchEvent != undefined) {
      setSelectedEvent(matchEvent);
      console.log("SelectedEVent", selectedEvent);
      setModalVisible(true);
    } else {
      console.log("Normal Day");
    }
  };

  console.log('dates', datesList)
  let dates = {}

  datesList.forEach(
    (item) => { dates[item] = { selected: true, marked: true, selectedColor: Colors.primary } }
  )
  return (
    <View style={styles.container}>
      <CalendarList
        markedDates={dates}
        style={styles.calendar}
        scrollEnabled={true}
        pastScrollRange={0}
        futureScrollRange={6}
        showScrollIndicator={true}
        snapToEnd={true}
        transparent={true}
        onDayPress={(day) => handleDayPress(day)}
      />

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}

        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>X</Text>
              </TouchableOpacity>
              {selectedEvent !== {} && (
                <View style={styles.textContainer}>
                  <Text style={styles.modalText}>{selectedEvent.title}</Text>
                  <Text style={styles.modalTextSec}>{selectedEvent.time}</Text>
                  <Text style={styles.modalTextSec}>
                    Locacion: {selectedEvent.location}
                  </Text>
                  <Text style={styles.modalTextSec}>
                    Precio:{" "}
                    {selectedEvent.price === 0
                      ? "Gratis"
                      : `$${selectedEvent.price}`}
                  </Text>
                  <Text style={styles.modalTextSec}>
                    Lo organiza: {selectedEvent.author}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default CalendarScreen;

// {
//   [EventsList[0].date]: {
//     selected: true,
//     marked: true,
//     selectedColor: Colors.primary,
//   },
//   [EventsList[1].date]: {
//     selected: true,
//     marked: true,
//     selectedColor: Colors.primary,
//   },
//   [EventsList[2].date]: {
//     selected: true,
//     marked: true,
//     selectedColor: Colors.primary,
//   },
// }
