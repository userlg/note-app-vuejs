var app = new Vue({
  el: "#app",
  data: {
    newElement: "",
    element: [
      { tarea: "Make Sport", completed: true },
      { tarea: "Cook the dinner", completed: true },
      { tarea: "Watch tv", completed: false },
      { tarea: "Writr Javascript code", completed: true },
    ],
  },
  methods: {
    addElement() {
      if (this.newElement.length > 1)
        this.element.push({
          tarea: this.newElement,
          completed: false,
        });
      this.num = 0;
      this.newElement = "";
    },
    removeElement(num) {
      if (this.element.length > 0) {
        this.element.splice(num, 1);
      }
    },
    editElement(num) {
      if (this.newElement.length > 0) {
        this.element[num].tarea = this.newElement;
        this.newElement = "";
      } else alert("Para editar escriba una actividad en el campo de entrada");
    },
    exportPDF() {
      var vm = this.element;
      var columns = [
        { title: "Tarea", dataKey: "tarea" },
        { title: "Completada", dataKey: "completed" },
      ];
      var doc = new jsPDF("p", "pt");
      // doc.text("Lista de actividades", 40, 40);
      doc.autoTable(columns, vm);
      doc.save("file.pdf");
    },
  },
});
