function solve(speed, area){
    let speedStatus = 0;
    statuss = '';
    switch (area) {
        case 'motorway':
            if(speed <= 130){
                console.log(`Driving ${speed} km/h in a 130 zone`);
            }else{
                speedStatus = speed - 130;
                if(speedStatus <= 20){
                    statuss = 'speeding';
                }else if(speedStatus > 20 && speedStatus <= 40){
                    statuss = 'excessive speeding'
                }else{
                    statuss = 'reckless driving'
                }
                console.log(`The speed is ${speedStatus} km/h faster than the allowed speed of 130 - ${statuss}`);
            }
            break;
      case 'interstate':
                if(speed <= 90){
                    console.log(`Driving ${speed} km/h in a 90 zone`);
                }else{
                    speedStatus = speed - 90;
                    if(speedStatus <= 20){
                        statuss = 'speeding';
                    }else if(speedStatus > 20 && speedStatus <= 40){
                        statuss = 'excessive speeding'
                    }else{
                        statuss = 'reckless driving'
                    }
                    console.log(`The speed is ${speedStatus} km/h faster than the allowed speed of 90 - ${statuss}`);
                }
                break;
            case 'city':
                    if(speed <= 50){
                        console.log(`Driving ${speed} km/h in a 50 zone`);
                    }else{
                        speedStatus = speed - 50;
                        if(speedStatus <= 20){
                            statuss = 'speeding';
                        }else if(speedStatus > 20 && speedStatus <= 40){
                            statuss = 'excessive speeding'
                        }else{
                            statuss = 'reckless driving'
                        }
                        console.log(`The speed is ${speedStatus} km/h faster than the allowed speed of 50 - ${statuss}`);
                    }
                    break;
             case 'residential':
                        if(speed <= 20){
                            console.log(`Driving ${speed} km/h in a 20 zone`);
                        }else{
                            speedStatus = speed - 20;
                            if(speedStatus <= 20){
                                statuss = 'speeding';
                            }else if(speedStatus > 20 && speedStatus <= 40){
                                statuss = 'excessive speeding'
                            }else{
                                statuss = 'reckless driving'
                            }
                            console.log(`The speed is ${speedStatus} km/h faster than the allowed speed of 20 - ${statuss}`);
                        }
                        break;
        default:
            console.log('error');
            break;
    }
}