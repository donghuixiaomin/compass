let compass_reading = 0
let servo_angle = 0
basic.forever(function () {
    // 获取磁力计读数
    compass_reading = input.compassHeading()
    // 将磁力计读数映射到舵机角度范围
    servo_angle = compass_reading / 360 * 180
    // 控制舵机转动到相应角度
    pins.servoWritePin(AnalogPin.P0, servo_angle)
    // 等待一段时间再进行下一次检测
    basic.pause(100)
})
