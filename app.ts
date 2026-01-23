import Homey from 'homey';
import hook_stdouterr from './hook';

class MyApp extends Homey.App {

  logs:string[] = [];
  unhook: () => void = () => {};

  async onInit() {

    this.unhook = hook_stdouterr((str:string) => {
      this.logs = this.logs.slice(-500).concat(str);
      this.homey.settings.set("log", this.logs.join(""));
    });

    this.homey.flow.getConditionCard('operation-mode')
      .registerRunListener(async (args) => {
        const currentMode = args.device.getCapabilityValue('operation_mode');
        return currentMode === args.mode;
      });

    this.log('MyApp has been initialized');
  }

  async onUninit(): Promise<void> {
    this.unhook();
  }

}

module.exports = MyApp;
