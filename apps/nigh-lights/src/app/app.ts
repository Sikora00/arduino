import { Led, Sensor } from 'johnny-five';

export const app = () => {
  let threshold;
  const photoResistor = new Sensor({
    pin: 'A5'
  });
  const potentiometer = new Sensor({
    pin: 'A4'
  });
  const led = new Led({ pin: 8 });

  potentiometer.on('data', function() {
    threshold = this.value;
  });
  photoResistor.on('data', function() {
    if (this.value > threshold) {
      led.on();
    } else {
      led.off();
    }
  });
};
