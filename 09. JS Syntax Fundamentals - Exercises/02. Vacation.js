function solve(count, type, day){
    let totalSum;
    switch (type) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    totalSum = 8.45 * count;
                    if(count >= 30){
                        totalSum = totalSum - totalSum * 0.15;
                    }
                    break;
                case 'Saturday':
                    totalSum = 9.80 * count;
                    if(count >= 30){
                        totalSum = totalSum - totalSum * 0.15;
                    }
                    break;
                case 'Sunday':
                    totalSum = 10.46 * count;
                    if(count >= 30){
                        totalSum = totalSum - totalSum * 0.15;
                    }
                    break;
                default:
                    break;
            }
            break;
            case 'Business':
                switch (day) {
                    case 'Friday':
                        if(count >= 100){
                            count -= 10;
                        }
                        totalSum = 10.90 * count;
                        break;
                    case 'Saturday':
                        if(count >= 100){
                            count -= 10;
                        }
                        totalSum = 15.60 * count;
                        break;
                    case 'Sunday':
                        if(count >= 100){
                            count -= 10;
                        }
                        totalSum = 16 * count;
                        break;
                    default:
                        break;
                }
                break;
                case 'Regular':
                    switch (day) {
                        case 'Friday':
                            totalSum = 15 * count;
                            if(count >= 10 && count <= 20){
                                totalSum = totalSum - totalSum * 0.5;
                            }
                            break;
                        case 'Saturday':
                            totalSum = 20 * count;
                            if(count >= 10 && count <= 20){
                                totalSum = totalSum - totalSum * 0.5;
                            }
                            break;
                        case 'Sunday':
                            totalSum = 22.50 * count;
                            if(count >= 10 && count <= 20){
                                totalSum = totalSum - totalSum * 0.5;
                            }
                            break;
                        default:
                            break;
                    }
                    break;
            
        default:
            break;
        }
     console.log(`Total price: ${totalSum.toFixed(2)}`);
}