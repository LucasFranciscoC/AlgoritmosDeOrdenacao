document.getElementById('insertionSortButton').addEventListener('click', function() {
    const data = [5, 3, 8, 4, 2, 7, 1, 10, 6, 9];
    const sortedData = insertionSort(data);
    document.getElementById('sortedData').innerText = sortedData.join(', ');
});

document.getElementById('bubbleSortButton').addEventListener('click', function() {
    const data = [5, 3, 8, 4, 2, 7, 1, 10, 6, 9];
    const sortedData = bubbleSort(data);
    document.getElementById('sortedData').innerText = sortedData.join(', ');
});

document.getElementById('mergeSortButton').addEventListener('click', function() {
    const data = [5, 3, 8, 4, 2, 7, 1, 10, 6, 9];
    const sortedData = mergeSort(data);
    document.getElementById('sortedData').innerText = sortedData.join(', ');
});

document.getElementById('refreshButton').addEventListener('click', function() {
    location.reload();
});

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
