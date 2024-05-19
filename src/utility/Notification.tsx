import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import notifee, {TimestampTrigger, TriggerType} from '@notifee/react-native';

const NotificationScheduler = () => {
    const [index, setIndex] = useState(0);
    const testTimeArr = [
        {hours: 9, minutes: 50 },{hours: 12, minutes: 10 },{hours: 15, minutes: 50 },{hours: 19, minutes: 20 },
    ];

    const scheduleNotification = async (timestamp:number) => {
        try {
            const channelId = await notifee.createChannel({
                id: 'default',
                name: 'Default Channel',
            });

            const trigger: TimestampTrigger = {
                type: TriggerType.TIMESTAMP,
                timestamp,
                alarmManager: true,
            };

            await notifee.createTriggerNotification(
                {
                    title: 'Drinking Time',
                    body: 'Tell Daddy that you drank water',
                    android: {
                        channelId,
                        smallIcon: 'icon_notifi', // Ensure you have this icon in your drawable resources
                        sound: 'default',
                        pressAction: {
                            id: 'default',
                        },
                    },
                },
                trigger,
            );

            console.log(`Notification scheduled for timestamp: ${timestamp}`);
        } catch (error) {
            console.error('Failed to schedule notification:', error);
        }
    };

    const getTimeStamps  = (hour: number, minute:number) =>{

        const currentTimestamp = new Date(new Date().getFullYear(), new Date().getDate(),  hour, minute )
        
        if(new Date().getHours() <= currentTimestamp.getHours() )
            currentTimestamp.setDate(currentTimestamp.getDate() + 1)

        return currentTimestamp
    }

    useEffect(() => {
        const scheduleNextNotification = async () => {
            const currentTimestamp = getTimeStamps(testTimeArr[index].hours, testTimeArr[index].minutes);
            await scheduleNotification(currentTimestamp.getHours());

            const newIndex = (index + 1) % testTimeArr.length;
            setIndex(newIndex);
        };

        scheduleNextNotification();
    }, []); // Re-run effect whenever index changes

    return (
        <View>
            <Text>Notifications are scheduled automatically.</Text>
        </View>
    );
};

export default NotificationScheduler;
