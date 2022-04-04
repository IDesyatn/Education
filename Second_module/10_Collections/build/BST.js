"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BST = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
    return Node;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.clear = function () {
        this.root = null;
    };
    BST.prototype.height = function () {
        if (this.root === null) {
            return 0;
        }
        function counterH(value, height) {
            if (value.right === null && value.left === null) {
                return height;
            }
            if (value.right && value.left) {
                return Math.max(counterH(value.right, height + 1), counterH(value.left, height + 1));
            }
            else if (value.right === null) {
                return counterH(value.left, height + 1);
            }
            else {
                return counterH(value.right, height + 1);
            }
        }
        return counterH(this.root, 1);
    };
    BST.prototype.init = function (array) {
        for (var i = 0; i < array.length; i++) {
            this.insert(array[i]);
        }
    };
    BST.prototype.insert = function (value) {
        if (this.root === null) {
            this.root = new Node(value);
        }
        else {
            var current = this.root;
            while (current) {
                if (current.value === value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        return;
                    }
                    else {
                        current = current.right;
                    }
                }
                if (current.value < value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        return;
                    }
                    else {
                        current = current.right;
                    }
                }
                if (current.value > value) {
                    if (current.left === null) {
                        current.left = new Node(value);
                        return;
                    }
                    else {
                        current = current.left;
                    }
                }
            }
        }
    };
    BST.prototype.leaves = function () {
        function counter(value) {
            if (value === null) {
                return 0;
            }
            if (value.right === null && value.left === null) {
                return 1;
            }
            return counter(value.right) + counter(value.left);
        }
        return counter(this.root);
    };
    BST.prototype.maxNode = function () {
        var value = this.root;
        if (value === null) {
            return undefined;
        }
        while (value) {
            if (value.right === null) {
                return value.value;
            }
            value = value.right;
        }
    };
    BST.prototype.minNode = function () {
        var value = this.root;
        if (value === null) {
            return undefined;
        }
        while (value) {
            if (value.left === null) {
                return value.value;
            }
            value = value.left;
        }
    };
    BST.prototype.nodes = function () {
        var arr = this.toArray();
        return arr.length;
    };
    BST.prototype.print = function (node, callback) {
        callback(this.root);
    };
    BST.prototype.remove = function (value) {
        if (value === null) {
            return undefined;
        }
        this.root = removeNode(this.root, value);
        function removeNode(current, value) {
            if (current === null) {
                return null;
            }
            if (value < current.value) {
                current.left = removeNode(current.left, value);
            }
            else if (value > current.value) {
                current.right = removeNode(current.right, value);
            }
            else {
                if (current.left == null && current.right == null) {
                    current = null;
                    return current;
                }
                else if (current.left == null) {
                    current = current.right;
                    return current;
                }
                else if (current.right == null) {
                    current = current.left;
                    return current;
                }
                else {
                    current.right = removeNode(currentValue(current.right).right, currentValue(current.right).value);
                    return current;
                }
            }
            return current;
        }
        function currentValue(value) {
            while (value && value.left) {
                value = value.left;
            }
            return value;
        }
        if (this.root !== null) {
            return this.root.value;
        }
        else {
            return null;
        }
    };
    BST.prototype.reverse = function () {
        var value = this.root;
        changeArr(value);
        function changeArr(current) {
            if (current === null) {
                return null;
            }
            if (current.left && current.right) {
                var right = current.right;
                current.right = current.left;
                current.left = right;
                changeArr(current.right);
                changeArr(current.left);
            }
            else if (current.left === null) {
                current.left = current.right;
                current.right = null;
                changeArr(current.left);
            }
            else if (current.right === null) {
                current.right = current.left;
                current.left = null;
                changeArr(current.right);
            }
        }
    };
    BST.prototype.search = function (value) {
        var current = this.root;
        if (current === null) {
            return undefined;
        }
        while (current) {
            if (current.value === value) {
                return current.value;
            }
            if (current.value > value) {
                current = current.left;
            }
            if (current.value < value) {
                current = current.right;
            }
        }
        return undefined;
    };
    BST.prototype.size = function () {
        var arr = this.toArray();
        return arr.length;
    };
    BST.prototype.toArray = function () {
        var result = [];
        pushArray(this.root, result);
        function pushArray(current, result) {
            if (current) {
                pushArray(current.left, result);
                result.push(current.value);
                pushArray(current.right, result);
            }
        }
        return result;
    };
    BST.prototype.width = function () {
        var value = 0;
        var maxValue = 0;
        if (this.root === null) {
            return 0;
        }
        if (this.root.right === null && this.root.left === null) {
            return 1;
        }
        for (var i = 1; i <= this.height(); i++) {
            value = counterWidth(this.root, i);
            if (value > maxValue) {
                maxValue = value;
            }
        }
        function counterWidth(current, level) {
            if (current === null) {
                return 0;
            }
            if (level === 1) {
                return 1;
            }
            return counterWidth(current.right, level - 1) + counterWidth(current.left, level - 1);
        }
        return maxValue;
    };
    return BST;
}());
exports.BST = BST;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxDQUFDO1NBQ1o7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUVsQyxJQUFJLEtBQUssR0FBRyxRQUFRLEVBQUU7Z0JBQ2xCLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDcEI7U0FDSjtRQUVELFNBQVMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLO1lBQ2hDLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDbEIsT0FBTyxDQUFDLENBQUM7YUFDWjtZQUVELElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDYixPQUFPLENBQUMsQ0FBQzthQUNaO1lBRUQsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFGLENBQUM7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBQ0wsVUFBQztBQUFELENBbFJBLEFBa1JDLElBQUE7QUFsUlksa0JBQUciLCJmaWxlIjoiQlNULmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVHJlZX0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmNsYXNzIE5vZGUge1xyXG4gICAgdmFsdWU6IG51bWJlciB8IHN0cmluZztcclxuICAgIHJpZ2h0OiBudWxsIHwgTm9kZTtcclxuICAgIGxlZnQ6IG51bGwgfCBOb2RlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQlNUIGltcGxlbWVudHMgSVRyZWUge1xyXG4gICAgcm9vdDogbnVsbCB8IE5vZGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvb3QgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0aGlzLnJvb3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNvdW50ZXJIKHZhbHVlLCBoZWlnaHQpOiBudW1iZXIge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUucmlnaHQgPT09IG51bGwgJiYgdmFsdWUubGVmdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmFsdWUucmlnaHQgJiYgdmFsdWUubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KGNvdW50ZXJIKHZhbHVlLnJpZ2h0LCBoZWlnaHQgKyAxKSwgY291bnRlckgodmFsdWUubGVmdCwgaGVpZ2h0ICsgMSkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnJpZ2h0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlckgodmFsdWUubGVmdCwgaGVpZ2h0ICsgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnRlckgodmFsdWUucmlnaHQsIGhlaWdodCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY291bnRlckgodGhpcy5yb290LCAxKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoYXJyYXkpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0KGFycmF5W2ldKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnQodmFsdWUpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5yb290ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IG5ldyBOb2RlKHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMucm9vdDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC52YWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5yaWdodCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50LnJpZ2h0ID0gbmV3IE5vZGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQudmFsdWUgPCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LnJpZ2h0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQucmlnaHQgPSBuZXcgTm9kZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5yaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC52YWx1ZSA+IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQubGVmdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50LmxlZnQgPSBuZXcgTm9kZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZWF2ZXMoKTogbnVtYmVyIHsvL9Cy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC60L7Qu9C40YfQtdGB0YLQstC+INC70LjRgdGC0YzQtdCyINCyINC00LXRgNC10LLQtVxyXG4gICAgICAgIGZ1bmN0aW9uIGNvdW50ZXIodmFsdWUpOiBudW1iZXIge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5yaWdodCA9PT0gbnVsbCAmJiB2YWx1ZS5sZWZ0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY291bnRlcih2YWx1ZS5yaWdodCkgKyBjb3VudGVyKHZhbHVlLmxlZnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvdW50ZXIodGhpcy5yb290KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbWF4Tm9kZSgpOiBhbnkgeyAvLyDQstC+0LfQstGA0LDRidCw0LXRgiDRg9C30LXQuyDRgSDQvNCw0LrRgdC40LzQsNC70YzQvdGL0Lwg0YfQuNGB0LvQvtC8XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yb290O1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUucmlnaHQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtaW5Ob2RlKCk6IGFueSB7IC8vINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGD0LfQtdC7INGBINC80LjQvdC40LzQsNC70YzQvdGL0Lwg0YfQuNGB0LvQvtC8XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yb290O1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUubGVmdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUubGVmdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbm9kZXMoKTogbnVtYmVyIHsvL9Cy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC60L7Qu9C40YfQtdGB0YLQstC+INGD0LfQu9C+0LIg0LIg0LTQtdGA0LXQstC1XHJcbiAgICAgICAgY29uc3QgYXJyID0gdGhpcy50b0FycmF5KCk7XHJcbiAgICAgICAgcmV0dXJuIGFyci5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQobm9kZTogYW55LCBjYWxsYmFjazogKGFyZzA6IE5vZGUpID0+IHZvaWQpOiB2b2lkIHsvL9C+0LHRhdC+0LQg0LIg0LPQu9GD0LHQuNC90YMg0LTQtdGA0LXQstCwIC0g0YLRgNC10LzRjyDRgdC/0L7RgdC+0LHQsNC80LhcclxuICAgICAgICBjYWxsYmFjayh0aGlzLnJvb3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSh2YWx1ZSk6IGFueSB7Ly/Rg9C00LDQu9C10L3QuNC1INGD0LfQu9CwINGB0L7Qs9C70LDRgdC90L4g0L/QtdGA0LXQtNCw0L3QvdC+0LzRgyDRh9C40YHQu9GDXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJvb3QgPSByZW1vdmVOb2RlKHRoaXMucm9vdCwgdmFsdWUpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVOb2RlKGN1cnJlbnQsIHZhbHVlKTogYW55IHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IGN1cnJlbnQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQubGVmdCA9IHJlbW92ZU5vZGUoY3VycmVudC5sZWZ0LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBjdXJyZW50LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LnJpZ2h0ID0gcmVtb3ZlTm9kZShjdXJyZW50LnJpZ2h0LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5sZWZ0ID09IG51bGwgJiYgY3VycmVudC5yaWdodCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQubGVmdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQucmlnaHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQucmlnaHQgPSByZW1vdmVOb2RlKGN1cnJlbnRWYWx1ZShjdXJyZW50LnJpZ2h0KS5yaWdodCwgY3VycmVudFZhbHVlKGN1cnJlbnQucmlnaHQpLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGN1cnJlbnRWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgICAgICB3aGlsZSAodmFsdWUgJiYgdmFsdWUubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5sZWZ0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnJvb3QgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdC52YWx1ZSA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldmVyc2UoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yb290XHJcblxyXG4gICAgICAgIGNoYW5nZUFycih2YWx1ZSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNoYW5nZUFycihjdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudC5sZWZ0ICYmIGN1cnJlbnQucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIGxldCByaWdodCA9IGN1cnJlbnQucmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LnJpZ2h0ID0gY3VycmVudC5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC5sZWZ0ID0gcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VBcnIoY3VycmVudC5yaWdodCk7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VBcnIoY3VycmVudC5sZWZ0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50LmxlZnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQubGVmdCA9IGN1cnJlbnQucmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LnJpZ2h0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNoYW5nZUFycihjdXJyZW50LmxlZnQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQucmlnaHQgPT09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC5yaWdodCA9IGN1cnJlbnQubGVmdDtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQubGVmdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VBcnIoY3VycmVudC5yaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoKHZhbHVlKTogYW55IHtcclxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMucm9vdDtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlKGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQudmFsdWUgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudC52YWx1ZSA+IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5sZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LnZhbHVlIDwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBhcnIgPSB0aGlzLnRvQXJyYXkoKVxyXG4gICAgICAgIHJldHVybiBhcnIubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHRvQXJyYXkoKTogYW55W10ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBwdXNoQXJyYXkodGhpcy5yb290LCByZXN1bHQpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBwdXNoQXJyYXkoY3VycmVudCwgcmVzdWx0KTogdm9pZHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHB1c2hBcnJheShjdXJyZW50LmxlZnQsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjdXJyZW50LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHB1c2hBcnJheShjdXJyZW50LnJpZ2h0LCByZXN1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSAwO1xyXG4gICAgICAgIGxldCBtYXhWYWx1ZSA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJvb3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5yb290LnJpZ2h0ID09PSBudWxsICYmIHRoaXMucm9vdC5sZWZ0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5oZWlnaHQoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gY291bnRlcldpZHRoKHRoaXMucm9vdCwgaSlcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA+IG1heFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjb3VudGVyV2lkdGgoY3VycmVudCwgbGV2ZWwpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobGV2ZWwgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY291bnRlcldpZHRoKGN1cnJlbnQucmlnaHQsIGxldmVsIC0gMSkgKyBjb3VudGVyV2lkdGgoY3VycmVudC5sZWZ0LCBsZXZlbCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF4VmFsdWU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii4uIn0=