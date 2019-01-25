(function ($) {

  // setup menu
  $.fn.wPaint.menus.main = {
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAASCAQAAABYgTxKAAAAAnNCSVQICFXsRgQAAAAJcEhZcwAACusAAArrAYKLDVoAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDgvMTIvMTM6SSjHAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAABjRJREFUWMPF2H1sFEUUAPA9qOUuFNJgFEpU+g+EiFE0ikDEv4jPyNJe4kNbhhJlyUqIkYrGfsQUoQU8AiEGrYYTglT5sIEAAYkWAWMkRI0SxURRW4zWtPLhUSjloHR8uzs3nb3bvQ8kR15aZme31+yvw5v3RsNCrlmBGo7AKtyA6/EtrMP7sMCZdwcW0J06emI9PTkPR8j5QrQ+gdvfvcK+w29SGBeNuPGpUdSh+YfuH6HqlZG+SDzyWLa/z1QjaH5vxumr1Ln2eh6WwEmY5J7TcIvFhSFcjJ04QCBWDOB13I+POn8AhXkafiKfsaKTfipE8yPxAxuT+1CLOzcNmtuxzyi+AehQeHPDQORihEc419jfrI/FWRf7jf3Kuml8gXWwU6yT9dizGz2goya3o90c7w0Nj8CfwOFdCLqhr2MUJ2ObwpeIa/gqBiTyEHwN+z2easMHcRN9yuCMN3OWIX/fZFoCp+X8abqaLKHbBPUuf2of5sJwcy1fyZfzNT2RqwQdI2pgQ61PZS8wzr5jE+1xCVtDV++kQM8SzFYcMyekQsNEWs3cjrUwRIXmeBXP+Lz2ANY66xADWO+Lc5Y+gbtAvZm1bKGxFI963j2Kpdb9Ds3YK6h3GsNzgS5rruENfB5v4q9fWdVEoHE2nQkOFZquHmJfsmVJ0MVmlwLNzZPmGIWYPgdK4JBg7oY+qHZDq3EVL+BlZX0O4Ez71Z9QnunHXoxhPOknNU9qv/tpoGktx3zvx6x1TdABo1VQtxqBrKGjNfwNXkVfNTy8eYXF+TO7nwU8oceyJWxxEvR2F7MVewTyHbAMvoC5sF4wcxqXQBcYXtC9eBDLKN9OwqXYIWc/o01yBB6S1+1YjffSTBk93ZtCmx4+m+RRnIbZobbThTGcVrNDvTdL6JZa3kiruYGYy5p1rcniHMnkf283NF3fxkIu6DkpzBQ2cxja4TI0wiuSebU9/yTEYGYq9AeidrASxT34rVzTT+Es+czXeJdSaWxNu4azu5ccWzI/4VAaxZSjHeq2LKC31fNVnBFzLQ8364W61piUXZOhk6qO0Wa3L/Q1uAJr4BnJvEWmExP+gonJ0P9iWaLKIJTpMnNvw+1i9A9OVWqQsGvt+W9+uW2LscxPJDCJep+gPpwBurWev8krKWnU8XBUD1lzOUIf8GI2D9ic38Ax0OG6YN4Lw5XM/TacgFEW9BXss6PXhpwhqQO4UbzYeQpn9J7C/Dg9zfESZXQn/OqMG64//GOQ0yiietqhPmIU+EAPnb3DYW7k9bx8qx505nOCXlThxRwzx9qYS2EXbBLM7aAsRgjCQZr7EIqsCjoRQcq8BYnamVgWpLzi867WpQiH0c8k4pZAE3UBETvUrhZGMgfLt9YTcSVR1/PZO/ShiTs5QI8lUl7BFyZDL3LKO3gJ9sMU6BfUGxToHWJOT2kuJKSGlXbZNhhxrPBvIm5F6pDYh1NbGNmeROsoYTjMequaTnKAFmmjki9wpY1EwwJNcJy+M5mjlwvmdeLaWtGpYBJuacorvpwFdN42Qxd1Sgsz2J400Ba4ymLe5s7bOUBL3Ln8ucS4m7bHBHQL/AIFMATqJPVCmq2mTdIaH4eRlKO90Wy4FvFiZ+S22JIROm/lXQp1UgujtieNVGnoLcl1yI1Am/RHm++M5gyeddBW2AV30r8h2voc6N/hfcrW1ug0jLOrDl82HXvEq32MO8WoB/W00HlrWDygk1oYd3uiR1Pr6hyg96jUVRTUumgK9HmKCfZoFG2LXIlLMEXU0T5sAVwn+0CgvjBxyrE2DXQeW3BPalcLU769xtWe/C/oMdRsK9Tzu6gZV6H/gE4Q/QWMg68U6LDsDH3Zbscj9svttmuK3fb4cxzlC53HQyW/gyS1hcFzq13tSRbQKwj6J/awZ3k3wTymUM8aPGYS6/hupdJ4AE4J5heVs440K7QET1JfONXO2FNp9AOOTpuj83ZM2pGOWrQws89W8eVKe5IOmg1jBvuRmK3oZyfYHI+GZbzZLpij6rGp53n0DMrZHJa5Tu/8NkPRHVag3e9Tlf0sTkv38vk8+E934G+3MHHjot6jdz19rvyjRHuSeUVnPPgvFUf+wUzQ9tH/TihRZ/4D/HRYqZH8JNwAAAAASUVORK5CYII=',
    items: {
      lineWidth: {
        icon: 'select',
        title: 'Stroke Width',
        range: [1, 3, 5, 10, 15, 20],
        value: 2,
        callback: function (width) { this.setLineWidth(width); }
      },
      strokeStyle: {
        icon: 'colorPicker',
        title: 'Stroke Color',
        callback: function (color) { this.setStrokeStyle(color); }
      },
      pencil: {
        icon: 'activate',
        group: 'tools',
        title: 'Pencil',
        index: 6,
        callback: function () { this.setMode('pencil'); }
      },
      arrow: {
        icon: 'activate',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mjg1QTgzMjFDMjZFMTFFODk2RjFBRTAyQTU0M0QyOUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mjg1QTgzMjJDMjZFMTFFODk2RjFBRTAyQTU0M0QyOUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyODVBODMxRkMyNkUxMUU4OTZGMUFFMDJBNTQzRDI5RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyODVBODMyMEMyNkUxMUU4OTZGMUFFMDJBNTQzRDI5RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgiIIiIAAAFlSURBVHjalNTPKwRhHMfxZ2c3yYEoypaDlINViqSQi6Pz/AFOjv4DJznIjZMLTv4CpCgHpFB+FAkHSUiJjWXzY70nn6eexq7Z+dSreXZn+s73+c7sJnzfL5jffCMhbrJYxgy2TIl4oXWiyDXVGEKH+SeeOnGTw5fz+QMvoZv+SapEF59Ian2OCayUWyindRUK6nQbk1jDW1Qhm0pnm3boFTjW9kzUjNx1KnS+CwtoilPIaMg7movRnHoxj8GorWU1l5xmMqtz00jrmgGM4QGnxbYadLSEO1w6g93AKK6ca/t0k+ZiHSUzmcwtxyOsYxXvEtw5jzbU6qaN6MYNLsKFrjke4ESP3c2eOg26qVGxYPAt2MejfXk9E51NjIQ66MEcWt2Oogrl1dUz2lGnBhpU8B5n5RSyOdTL2e/MLK2unjwTL7sY1oOw6Qz+YuIWetXMxp2HE/yU6uMWslnEVLAl+8WPAAMAjTdSj1s/nJsAAAAASUVORK5CYII=',
        index: 0,
        group: 'tools',
        title: 'Arrow',
        callback: function () { this.setMode('arrow'); }
      },
      line: {
        icon: 'activate',
        group: 'tools',
        title: 'Line',
        index: 5,
        callback: function () { this.setMode('line'); }
      },
      ellipse: {
        icon: 'activate',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzA1QjczQzdDMjlFMTFFOEE4NTI4RjE5RTg4NTMyOTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzA1QjczQzhDMjlFMTFFOEE4NTI4RjE5RTg4NTMyOTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MDVCNzNDNUMyOUUxMUU4QTg1MjhGMTlFODg1MzI5MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MDVCNzNDNkMyOUUxMUU4QTg1MjhGMTlFODg1MzI5MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqs8aJAAAAA8UExURf///1RUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVKxCssUAAAATdFJOUwANECAhMDEzUmVpoKW9wMXg7/Av7VFKAAAAX0lEQVQY042PORKAMAwDlYRASDi9//8rDUcKF2ypGa8l6Te5HQBHy3eQNl62JEnZOJd5DGGclxPLUjTW8hjKikU19umzTjtNRu0/VUww9NEAXuQcOnqnhFPVG+TN/sEF6VoHWfcftEQAAAAASUVORK5CYII=',        group: 'tools',
        index: 0,
        title: 'Ellipse',
        callback: function () { this.setMode('ellipse'); }
      },
      ellipsefilled: {
        icon: 'activate',
        group: 'tools',
        title: 'Filled Ellipse',
        index: 4,
        callback: function () { this.setMode('ellipsefilled'); }
      },
      rectangle: {
        icon: 'activate',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASAQMAAABsABwUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzY1OUQ5OENDMjlEMTFFOEE2NEFFOERFNEFDOEI2M0EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzY1OUQ5OERDMjlEMTFFOEE2NEFFOERFNEFDOEI2M0EiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNjU5RDk4QUMyOUQxMUU4QTY0QUU4REU0QUM4QjYzQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNjU5RDk4QkMyOUQxMUU4QTY0QUU4REU0QUM4QjYzQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgusSiIAAAAGUExURf///1RUVIymWK8AAAABdFJOUwBA5thmAAAAFUlEQVQI12NggIL//w+AMbEQph4KAKhRGfkBRPmQAAAAAElFTkSuQmCC',
        index: 0,
        group: 'tools',
        title: 'Rectangle',
        callback: function () { this.setMode('rectangle'); }
      },
      rectanglefilled: {
        icon: 'activate',
        group: 'tools',
        title: 'Filled Rectangle',
        index: 3,
        callback: function () { this.setMode('rectanglefilled'); }
      },
      eraser: {
        icon: 'activate',
        group: 'tools',
        title: 'Eraser',
        index: 8,
        callback: function () { this.setMode('eraser'); }
      },
      undo: {
        icon: 'generic',
        title: 'Undo',
        index: 0,
        callback: function () { this.undo(); }
      },
      redo: {
        icon: 'generic',
        title: 'Redo',
        index: 1,
        callback: function () { this.redo(); }
      },
      pause: {
        icon: 'toggle',
        title: 'Pause',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUNCMUNDQTZDMzVDMTFFODhBREM5REY5NzgyOEI0NDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUNCMUNDQTdDMzVDMTFFODhBREM5REY5NzgyOEI0NDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQ0IxQ0NBNEMzNUMxMUU4OEFEQzlERjk3ODI4QjQ0MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQ0IxQ0NBNUMzNUMxMUU4OEFEQzlERjk3ODI4QjQ0MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkdapysAAABYSURBVHjaYvz//z8DNQATA5UACzLH0dExE0hNQxKavn///iyoXAiQqkCSWwOU68BqEAEgCsTGSPxTNPHaqEGjBo0aRHzuJwBeA/FZJP4jZElGahVsAAEGAOdTE8+kg4bpAAAAAElFTkSuQmCC',
        index: 0,
        callback: function (toggle) { this.pause(toggle); }
      },
      orient: {
        icon: 'generic',
        title: 'Change Orientation',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjEyRDgzRDMwN0I0MTFFOTg5MjA5NjE4MTg3OEM1RDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjEyRDgzRDQwN0I0MTFFOTg5MjA5NjE4MTg3OEM1RDIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MTJEODNEMTA3QjQxMUU5ODkyMDk2MTgxODc4QzVEMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MTJEODNEMjA3QjQxMUU5ODkyMDk2MTgxODc4QzVEMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqQ820MAAACwSURBVHjaYgwJCWEAAj8glmAgDrwA4k0wzurVq8E0CxBHAfFSBtJANBAvQxYAGZQJZc8i0pA0qB4Mg2BgMRB/J2AIJ9QgDAAy6CYQ2wDxYRK8dhObQdOhbAMiDbmApAcOGKGxRgpIRgrXBSBDgTH3l4VEQ0CunoPEN4bSU1hg6YAYEBoaygNlHgHirUDcDsTSIAEmBiqBUYOGokEsZOqzgWLyXARMvEfQ8tl0GB8gwADAfCJJa6Gq2gAAAABJRU5ErkJggg==',
        index: 0,
        callback: function () { this.changeOrientation(); }
      },
      clear: {
        icon: 'generic',
        title: 'Clear',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjIxQkUxNjIwN0IyMTFFOUE0QzlCRDk0OTlCQkI4QUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjIxQkUxNjMwN0IyMTFFOUE0QzlCRDk0OTlCQkI4QUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMjFCRTE2MDA3QjIxMUU5QTRDOUJEOTQ5OUJCQjhBRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMjFCRTE2MTA3QjIxMUU5QTRDOUJEOTQ5OUJCQjhBRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm5dyLsAAAH/SURBVHjadNNdiExhGMDx95wzGi4Mpd2MtkwpNz5K5CM13HKBpBE7RS5cKesrtFEjChE33G2hSLutImlcsBpp29JuW7gxtR9cLtvOlt3mnBn+z/acejveeerXNO/Hc96P5/VKpZJxxA5sxQj2YTWa2jeFy6jJnyiKTKFQMKlyuZxMsg1vsRQ/0YdDiTE1TWbq9brJ5/MmlU6n7QE+7msSiQ6sxStdWRynMYkhz/OGfd9fmGjHSWxPtA3jvHzcaluiKxq3VxBHgP2JJD9wF9/xONF3Dr9diRrYizP4pW1XMIOVmMUn2Q6e6NktinOksAHLtcHDQ7zEYTyzbkq299f68B7cQA/n9EAmR7rsDxjAI4zhJkKdFFlJ1qMfb7AJ3UEQtEmiFWi3vnQEu03rWIeD1v9spVK5HuRyuXd6BnHMIa21FDoSfcVOrFm4oSAw1Wp1s6xoWWKglPpZvcVWcUEvxzSbTZPJZKYk0SlrwDfc0sOddSTo1N9RXMXnMAwHisXiMbm1XhzVGupVi3WC3OJzPMUW3MMBfXdyAZPc2Hw2mx1M6YRrOnlj4iAlvmiZ3EGb492VGo3GtG89g4vY5dhOTd+cq08q/naysmXfHx2DpVgn8MLRJ+/tT1zZdhzHCayy2t5rMV7SV/Bab6yqhWlciWb0QE2LbXRpRf8X/wQYAKbkfb/aFtjvAAAAAElFTkSuQmCC',
        index: 0,
        callback: function () { this.clear(); }
      }   
    }
  };

  // extend cursors
  $.extend($.fn.wPaint.cursors, {
    'default': {path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABZ0RVh0Q3JlYXRpb24gVGltZQAwOC8xMS8xMyj8hykAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAKElEQVQokWP4//8/AzYcEhLyH5ccEwMZYDhqYgwJCflPsq7RIKdAEwAlXE2/5hsdeQAAAABJRU5ErkJggg==', left: 7, top: 7},
    dropper:   {path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAYAAADOMhxqAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwOC8wOS8xM9AohnYAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAA60lEQVQ4je3SzypEARSA8d8dM6kpKQuPwBtY2TtSspCQlUewtqbsZGHFxkKTkrI5O9uJhUfwClaaZjAW7mjSdb3AnNXp9H2nzp9iOBz6LyLiGEvYK+qEiJjDBs7QxlOzBl7BIZbLUg+Pfwo4xWKZD3CQmeeNP7qv4wQPZekZF9D8BRbYwmdmXkbEB+ZxlJl9+Bk6IlrYRh93WEUD95k5GDVtjME76GVmp4TbmXk7DsNUt9stECVwHRGbmM3Mq6r5mphBC52I2MU0KuGRsF/ma3jDTWa+1wkvWPC9wtfMrP2V2teoisrDTYSJwBdMtVFOtaT7CAAAAABJRU5ErkJggg==', left: 0, top: 12},
    pencil:    {path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAArrAAAK6wGCiw1aAAAAFnRFWHRDcmVhdGlvbiBUaW1lADA4LzExLzEzKPyHKQAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAABjUExURf///1tbW1paWl1dXVpaWl1dXV5eXomJiVpaWl5eXn5+fltbW1xcXHNzc1tbW1xcXEhISFdXV1paWn19fXZ2doqKim5ubm9vb3FxcXNzc3Z2dnd3d3h4eHp6ent7e3x8fIqKirNcuSYAAAAWdFJOUwB7fH5/gYOEhYmJioqPnJ/u9/r7/Pz/JDtMAAAAT0lEQVQIHT3BWQKAEBQF0Nsk0jwRj+x/lX08Oge/KfUo2uNKyDpn3wFMknE12BiNE2A6WFJgimzQYMKZOIJV3pAEm+n2HbL9ORsU67ag+AA1uAPtGvrbPAAAAABJRU5ErkJggg==', left: 0, top: 11.99},
    bucket:    {path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAQAAAD8fJRsAAAAAnNCSVQICFXsRgQAAAAJcEhZcwAACusAAArrAYKLDVoAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDgvMTEvMTMo/IcpAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAALxJREFUGBkFwa0uBgAAQNG7T9FEEptgkqYpgt0iaBrFJomqYhMEk2wkk2ySEYxkUwTmBSiqCZK/uc4hIiJc8yIiIoiIcNJn/9yIiCAcOO2o9+aXjy5HBM577YFnZm477KWLEfjtlXtmHkc44blTgUfu+2M+SER46IPjuOu6N+abCxGu+GMu462rjvhsfjjjnJ/mlgP8dCec9d188dU8jcBXNyNc8tfMO4cjcMhBRLhuPjkWEURERHjiYkTEPyashU9chKt6AAAAAElFTkSuQmCC', left: 0, top: 10},
    eraser1:   {path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABZ0RVh0Q3JlYXRpb24gVGltZQAwOC8xMS8xMyj8hykAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAGUlEQVQImWP4//8/AwMDw38oDWf8Z0CWAQBywhLuDWvvLQAAAABJRU5ErkJggg==', left: 1, top: 1},
    eraser2:   {path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABZ0RVh0Q3JlYXRpb24gVGltZQAwOC8xMS8xMyj8hykAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAIElEQVQImWP4//8/AwMDw38GBob/UDaEAZNgYkAH6FoAcUEX67L+lA0AAAAASUVORK5CYII=', left: 2, top: 2},
    eraser3:   {path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABZ0RVh0Q3JlYXRpb24gVGltZQAwOC8xMS8xMyj8hykAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAJklEQVQImW2MsQkAAAyDTP//2S7tFiEgGUQF8KeSk3AkcSjUk9ZcJcQW85j1wPQAAAAASUVORK5CYII=', left: 2, top: 2},
    eraser4:   {path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABZ0RVh0Q3JlYXRpb24gVGltZQAwOC8xMS8xMyj8hykAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAKUlEQVQImZWNMQoAMAyEtP//s106ZMlQ4UC4QSqA5ip8IgO1w8L/wRa/Fd4Y8+iFI6cAAAAASUVORK5CYII=', left: 3, top: 3},
    eraser5:   {path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHAQMAAAD+nMWQAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAArrAAAK6wGCiw1aAAAAFnRFWHRDcmVhdGlvbiBUaW1lADA4LzExLzEzKPyHKQAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAAEklEQVQI12OwYHBhaAJDFwYLABGAAn+QDsbSAAAAAElFTkSuQmCC', left: 3, top: 3},
    eraser6:   {path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAArrAAAK6wGCiw1aAAAAFnRFWHRDcmVhdGlvbiBUaW1lADA4LzExLzEzKPyHKQAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAAEklEQVQI12OwYXBiaIRCJwYbABgQAwEuWVO3AAAAAElFTkSuQmCC', left: 4, top: 4},
    eraser7:   {path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAQMAAADaX5RTAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAArrAAAK6wGCiw1aAAAAFnRFWHRDcmVhdGlvbiBUaW1lADA4LzExLzEzKPyHKQAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAAGklEQVQI12OQYWBIZmBwZGBoaIAiR7CIDAMAPZsEgXomvwIAAAAASUVORK5CYII=', left: 4, top: 4},
    eraser8:   {path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKAQMAAAC3/F3+AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAArrAAAK6wGCiw1aAAAAFnRFWHRDcmVhdGlvbiBUaW1lADA4LzExLzEzKPyHKQAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAAG0lEQVQI12OQY2BIbGBwaGBocEAgIBcoKMcAAGG/Bn/pYoUOAAAAAElFTkSuQmCC', left: 5, top: 5 },
    eraser9:   {path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALAQMAAACTYuVlAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAArrAAAK6wGCiw1aAAAAFnRFWHRDcmVhdGlvbiBUaW1lADA4LzExLzEzKPyHKQAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAAG0lEQVQI12OQZ2BQaGBwcGBoUEBBQBGguDwDAF1/BZ+pSNa0AAAAAElFTkSuQmCC', left: 5, top: 5},
    eraser10:  {path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAQMAAABsu86kAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAArrAAAK6wGCiw1aAAAAFnRFWHRDcmVhdGlvbiBUaW1lADA4LzExLzEzKPyHKQAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAAHElEQVQI12PgZ2AwOMDgoABCDQIIBBEBSvEzAABoHwW/Qv4i2QAAAABJRU5ErkJggg==', left: 6, top: 6}
  });

  // extend defaults
  $.extend($.fn.wPaint.defaults, {
    mode:        'pencil',  // set mode
    lineWidth:   '10',       // starting line width
    fillStyle:   '#FFFFFF', // starting fill style
    strokeStyle: '#FF0000'  // start stroke style
  });

  // extend functions
  $.fn.wPaint.extend({
    undoCurrent: -1,
    undoArray: [],
    setUndoFlag: true,

    generate: function () {
      this.menus.all.main = this._createMenu('main', {
        offsetLeft: this.options.menuOffsetLeft,
        offsetTop: this.options.menuOffsetTop
      });
    },

    _init: function () {
      // must add undo on init to set the first undo as the initial drawing (bg or blank)
      this._addUndo();
      this.menus.all.main._setIconDisabled('clear', true);
    },

    setStrokeStyle: function (color) {
      this.options.strokeStyle = color;
      this.menus.all.main._setColorPickerValue('strokeStyle', color);
    },

    setLineWidth: function (width) {
      this.options.lineWidth = width;
      this.menus.all.main._setSelectValue('lineWidth', width);

      // reset cursor here based on mode in case we need to update cursor (for instance when changing cursor for eraser sizes)
      this.setCursor(this.options.mode);
    },

    setFillStyle: function (color) {
      this.options.fillStyle = color;
      this.menus.all.main._setColorPickerValue('fillStyle', color);
    },

    setCursor: function (cursor) {
      if (cursor === 'eraser') {
        this.setCursor('eraser' + this.options.lineWidth);
      }
    },

    /****************************************
     * change orientation
     ****************************************/
    changeOrientation: function () {
      if (this.options.menuOrientation === 'horizontal') {
        this.options.menuOrientation = 'vertical';
        this.setMenuOrientation('vertical');
      } else {
        this.options.menuOrientation = 'horizontal';
        this.setMenuOrientation('horizontal');
      }
    },

    /****************************************
     * undo / redo
     ****************************************/
    undo: function () {
      if (this.undoArray[this.undoCurrent - 1]) {
        this._setUndo(--this.undoCurrent);
      }

      this._undoToggleIcons();
    },

    redo: function () {
      if (this.undoArray[this.undoCurrent + 1]) {
        this._setUndo(++this.undoCurrent);
      }

      this._undoToggleIcons();
    },

    _addUndo: function () {

      //if it's not at the end of the array we need to repalce the current array position
      if (this.undoCurrent < this.undoArray.length - 1) {
        this.undoArray[++this.undoCurrent] = this.getImage(false);
      }
      else { // owtherwise we push normally here
        this.undoArray.push(this.getImage(false));

        //if we're at the end of the array we need to slice off the front - in increment required
        if (this.undoArray.length > this.undoMax) {
          this.undoArray = this.undoArray.slice(1, this.undoArray.length);
        }
        //if we're NOT at the end of the array, we just increment
        else { this.undoCurrent++; }
      }

      //for undo's then a new draw we want to remove everything afterwards - in most cases nothing will happen here
      while (this.undoCurrent !== this.undoArray.length - 1) { this.undoArray.pop(); }

      this._undoToggleIcons();
      this.menus.all.main._setIconDisabled('clear', false);
    },

    _undoToggleIcons: function () {
      var undoIndex = (this.undoCurrent > 0 && this.undoArray.length > 1) ? 0 : 1,
          redoIndex = (this.undoCurrent < this.undoArray.length - 1) ? 2 : 3;

      this.menus.all.main._setIconDisabled('undo', undoIndex === 1 ? true : false);
      this.menus.all.main._setIconDisabled('redo', redoIndex === 3 ? true : false);
    },

    _setUndo: function (undoCurrent) {
      this.setImage(this.undoArray[undoCurrent], null, null, true);
    },

    /****************************************
     * clear
     ****************************************/
    clear: function () {

      // only run if not disabled (make sure we only run one clear at a time)
      if (!this.menus.all.main._isIconDisabled('clear')) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this._addUndo();
        this.menus.all.main._setIconDisabled('clear', true);
      }
    },

    /****************************************
     * pause
     ****************************************/
    pause: function (pauseState) {
      this.options.isPaused = pauseState;
      if (this.options.isPaused) { 
        this.setCursor('paused');
      } else {
        this.setCursor(this.options.mode);
      }
    },

    /****************************************
     * rectangle
     ****************************************/
    _drawRectangleDown: function (e) { this._drawShapeDown(e); },

    _drawRectangleMove: function (e) {
      this._drawShapeMove(e);

      this.ctxTemp.rect(e.x, e.y, e.w, e.h);
      this.ctxTemp.stroke();
      // this.ctxTemp.fill();
    },

    _drawRectangleUp: function (e) {
      this._drawShapeUp(e);
      this._addUndo();
    },

    /****************************************
     * ellipse
     ****************************************/
    _drawEllipseDown: function (e) { this._drawShapeDown(e); },

    _drawEllipseMove: function (e) {
      this._drawShapeMove(e);

      this.ctxTemp.ellipse(e.x, e.y, e.w, e.h);
      this.ctxTemp.stroke();
      // this.ctxTemp.fill();
    },

    _drawEllipseUp: function (e) {
      this._drawShapeUp(e);
      this._addUndo();
    },

        /****************************************
     * Filled rectangle 
     ****************************************/
    _drawRectanglefilledDown: function (e) { this._drawShapeDown(e); },

    _drawRectanglefilledMove: function (e) {
      this._drawShapeMove(e);

      this.ctxTemp.rect(e.x, e.y, e.w, e.h);
      this.ctxTemp.stroke();
      this.ctxTemp.fill();
    },

    _drawRectanglefilledUp: function (e) {
      this._drawShapeUp(e);
      this._addUndo();
    },

    /****************************************
     * Filled ellipse
     ****************************************/
    _drawEllipsefilledDown: function (e) { this._drawShapeDown(e); },

    _drawEllipsefilledMove: function (e) {
      this._drawShapeMove(e);

      this.ctxTemp.ellipse(e.x, e.y, e.w, e.h);
      this.ctxTemp.stroke();
      this.ctxTemp.fill();
    },

    _drawEllipsefilledUp: function (e) {
      this._drawShapeUp(e);
      this._addUndo();
    },

    /****************************************
     * line
     ****************************************/
    _drawLineDown: function (e) { this._drawShapeDown(e); },

    _drawLineMove: function (e) {
      this._drawShapeMove(e, 1);

      var xo = this.canvasTempLeftOriginal;
      var yo = this.canvasTempTopOriginal;
      
      if (e.pageX < xo) { e.x = e.x + e.w; e.w = e.w * - 1; }
      if (e.pageY < yo) { e.y = e.y + e.h; e.h = e.h * - 1; }

      this.ctxTemp.lineJoin = 'round';
      this.ctxTemp.beginPath();
      this.ctxTemp.moveTo(e.x, e.y);
      this.ctxTemp.lineTo(e.x + e.w, e.y + e.h);
      this.ctxTemp.closePath();
      this.ctxTemp.stroke();
    },

    _drawLineUp: function (e) {
      this._drawShapeUp(e);
      this._addUndo();
    },

    /****************************************
     * pencil
     ****************************************/
    _drawPencilDown: function (e) {
      this.ctx.lineJoin = 'round';
      this.ctx.lineCap = 'round';
      this.ctx.strokeStyle = this.options.strokeStyle;
      this.ctx.fillStyle = this.options.strokeStyle;
      this.ctx.lineWidth = this.options.lineWidth;
      
      //draw single dot in case of a click without a move
      this.ctx.beginPath();
      this.ctx.arc(e.pageX, e.pageY, this.options.lineWidth / 2, 0, Math.PI * 2, true);
      this.ctx.closePath();
      this.ctx.fill();
      
      //start the path for a drag
      this.ctx.beginPath();
      this.ctx.moveTo(e.pageX, e.pageY);
    },
    
    _drawPencilMove: function (e) {
      this.ctx.lineTo(e.pageX, e.pageY);
      this.ctx.stroke();
    },
    
    _drawPencilUp: function () {
      this.ctx.closePath();
      this._addUndo();
    },

    /****************************************
     * eraser
     ****************************************/
    _drawEraserDown: function (e) {
      this.ctx.save();
      this.ctx.globalCompositeOperation = 'destination-out';
      this._drawPencilDown(e);
    },
    
    _drawEraserMove: function (e) {
      this._drawPencilMove(e);
    },
    
    _drawEraserUp: function (e) {
      this._drawPencilUp(e);
      this.ctx.restore();
    },

    /****************************************
     * bucket
     ****************************************/
    _drawBucketDown: function (e) {
      this.ctx.fillArea(e.pageX, e.pageY, this.options.fillStyle);
      this._addUndo();
    },

    /****************************************
     * arrow
     ****************************************/
    _drawArrowDown: function (e) { this._drawShapeDown(e); },

    _drawArrowMove: function (e) {
      // begin new
      var bFactor = 3;
      this._drawShapeMove(e,bFactor);
      // end new

      var xo = this.canvasTempLeftOriginal;
      var yo = this.canvasTempTopOriginal;

      // if (e.pageX < xo) { e.x = e.x + e.w; e.w = e.w * - 1; }
      // if (e.pageY < yo) { e.y = e.y + e.h; e.h = e.h * - 1; }

      // var lx = e.x + e.w + 5; // 5 seems like a good hack to keep the arrowhead within bounds of ctxTemp.
      // var ly = e.y + e.h + 5;

      // begin new
      var xOffset = -5;
      var yOffset = -5;
      var isHorizontal = false;
      var isVertical = false;
      console.log("x: " + e.x + " y: " + e.y + " width: " + e.w + " height: " + e.h);
      if(e.w === 0) {
        isVertical = true;
        console.log("isVertical");
      }

      if(e.h === 0) {
        isHorizontal = true;
        console.log("isHorizontal");
      }

      e.x = e.x / bFactor;
      e.y = e.y / bFactor;
      e.w = e.w + (this.options.lineWidth * bFactor) - this.options.lineWidth;
      e.h = e.h  + (this.options.lineWidth * bFactor) - this.options.lineWidth;

      if (e.pageX < xo) { e.x = e.x + e.w; e.w = e.w * - 1; xOffset = xOffset * -1; }
      if (e.pageY < yo) { e.y = e.y + e.h; e.h = e.h * - 1; yOffset = yOffset * -1; }

      var lx = e.x + e.w + xOffset;
      var ly = e.y + e.h + yOffset;
      // end new
      var angle = Math.atan2(e.h, e.w);

      // begin new
      if(isVertical) {
        e.x = e.x * bFactor;
        lx = e.x;
        ly = e.h + yOffset;
        angle = Math.atan2(ly, 0);
      }

      if(isHorizontal) {
        e.y = e.h / 2;
        lx = e.w + xOffset;
        ly = e.h / 2;
      }

      console.log("post => x: " + e.x + " y: " + e.y + " width: " + e.w + " height: " + e.h + " lx: " + lx + " ly: " + ly + ' angle: ' + angle);

      this.ctxTemp.lineWidth = this.options.lineWidth; //return this to normal
      // end new
      this.ctxTemp.lineJoin = 'round';
      this.ctxTemp.beginPath();
      this.ctxTemp.moveTo(e.x, e.y);
      this.ctxTemp.lineTo(lx, ly);
      this.ctxTemp.closePath();
      this.ctxTemp.stroke();

      this.ctxTemp.lineJoin = 'miter';
      this.ctxTemp.beginPath();
      this.ctxTemp.moveTo(lx, ly);
      this.ctxTemp.lineTo(lx - 10 * Math.cos(angle - Math.PI / 7), ly - 10 * Math.sin(angle - Math.PI / 7));
      this.ctxTemp.lineTo(lx - 10 * Math.cos(angle + Math.PI / 7), ly - 10 * Math.sin(angle + Math.PI / 7));
      this.ctxTemp.lineTo(lx, ly);
      this.ctxTemp.lineTo(lx - 10 * Math.cos(angle - Math.PI / 7), ly - 10 * Math.sin(angle - Math.PI / 7));
      this.ctxTemp.closePath();
      this.ctxTemp.fillStyle = this.ctxTemp.strokeStyle; // fill the arrowhead for stroke thickness 3 or below
      this.ctxTemp.fill();
      this.ctxTemp.stroke();
      
    },

    _drawArrowUp: function (e) {
      this._drawShapeUp(e);
      this._addUndo();
    }
  });
})(jQuery);
