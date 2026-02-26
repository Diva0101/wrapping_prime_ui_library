import React, { useState, useRef } from "react";
import {
  Button,
  InputText,
  Dropdown,
  MultiSelect,
  Checkbox,
  RadioButton,
  InputSwitch,
  Card,
  Dialog,
  DataTable,
  Column,
  TabView,
  TabPanel,
  Menu,
  Toast,
  Message,
  ProgressBar,
  Slider,
  Calendar,
  Chips,
} from "./ui";

const dropdownOptions = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
  { label: "Option C", value: "c" },
];

const tableData = [
  { id: 1, name: "Item 1", status: "Active" },
  { id: 2, name: "Item 2", status: "Done" },
  { id: 3, name: "Item 3", status: "Active" },
];

const menuItems = [
  { label: "Home", icon: "pi pi-home" },
  { label: "Settings", icon: "pi pi-cog" },
  { label: "Help", icon: "pi pi-question-circle" },
];

export default function App() {
  const [dropdownValue, setDropdownValue] = useState<string | null>(null);
  const [multiValue, setMultiValue] = useState<string[]>([]);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("one");
  const [switchValue, setSwitchValue] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [dateValue, setDateValue] = useState<Date | null>(null);
  const [chipsValue, setChipsValue] = useState<string[]>([]);
  const toast = useRef<React.ComponentRef<typeof Toast>>(null);
  const menu = useRef<React.ComponentRef<typeof Menu>>(null);

  return (
    <div style={{ padding: 40, display: "flex", flexDirection: "column", gap: 32 }}>
      <Toast ref={toast} />

      <section style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
        <h2 style={{ width: "100%", margin: 0 }}>Button</h2>
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
      </section>

      <section style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
        <h2 style={{ width: "100%", margin: 0 }}>InputText</h2>
        <InputText placeholder="Enter text" />
      </section>

      <section style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
        <h2 style={{ width: "100%", margin: 0 }}>Dropdown</h2>
        <Dropdown
          options={dropdownOptions}
          value={dropdownValue}
          onChange={(e) => setDropdownValue(e.value)}
          placeholder="Select"
          style={{ minWidth: 200 }}
        />
      </section>

      <section style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
        <h2 style={{ width: "100%", margin: 0 }}>MultiSelect</h2>
        <MultiSelect
          options={dropdownOptions}
          value={multiValue}
          onChange={(e) => setMultiValue(e.value ?? [])}
          placeholder="Select multiple"
          style={{ minWidth: 200 }}
        />
      </section>

      <section style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
        <h2 style={{ width: "100%", margin: 0 }}>Checkbox</h2>
        <Checkbox
          inputId="cb1"
          checked={checkboxValue}
          onChange={(e) => setCheckboxValue(e.checked ?? false)}
        />
        <label htmlFor="cb1">Accept</label>
      </section>

      <section style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
        <h2 style={{ width: "100%", margin: 0 }}>RadioButton</h2>
        <div style={{ display: "flex", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <RadioButton
              inputId="r1"
              name="grp"
              value="one"
              checked={radioValue === "one"}
              onChange={(e) => setRadioValue(e.value ?? "")}
            />
            <label htmlFor="r1">One</label>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <RadioButton
              inputId="r2"
              name="grp"
              value="two"
              checked={radioValue === "two"}
              onChange={(e) => setRadioValue(e.value ?? "")}
            />
            <label htmlFor="r2">Two</label>
          </div>
        </div>
      </section>

      <section style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
        <h2 style={{ width: "100%", margin: 0 }}>InputSwitch</h2>
        <InputSwitch checked={switchValue} onChange={(e) => setSwitchValue(e.value ?? false)} />
      </section>

      <section>
        <h2 style={{ width: "100%", margin: "0 0 16px 0" }}>Card</h2>
        <Card title="Card Title" subTitle="Subtitle">
          <p>Card content goes here.</p>
        </Card>
      </section>

      <section>
        <h2 style={{ width: "100%", margin: "0 0 16px 0" }}>Dialog</h2>
        <Button label="Open Dialog" onClick={() => setDialogVisible(true)} />
        <Dialog
          header="Dialog Title"
          visible={dialogVisible}
          onHide={() => setDialogVisible(false)}
          style={{ width: 400 }}
        >
          <p>Dialog content.</p>
        </Dialog>
      </section>

      <section>
        <h2 style={{ width: "100%", margin: "0 0 16px 0" }}>DataTable</h2>
        <DataTable value={tableData} stripedRows tableStyle={{ minWidth: "400px" }}>
          <Column field="id" header="ID" />
          <Column field="name" header="Name" />
          <Column field="status" header="Status" />
        </DataTable>
      </section>

      <section>
        <h2 style={{ width: "100%", margin: "0 0 16px 0" }}>TabView</h2>
        <TabView>
          <TabPanel header="Tab 1">
            <p>Content of tab 1.</p>
          </TabPanel>
          <TabPanel header="Tab 2">
            <p>Content of tab 2.</p>
          </TabPanel>
          <TabPanel header="Tab 3">
            <p>Content of tab 3.</p>
          </TabPanel>
        </TabView>
      </section>

      <section>
        <h2 style={{ width: "100%", margin: "0 0 16px 0" }}>Menu</h2>
        <Menu model={menuItems} popup ref={menu} />
        <Button label="Show Menu" onClick={(e) => menu.current?.toggle(e)} />
      </section>

      <section>
        <h2 style={{ width: "100%", margin: "0 0 16px 0" }}>Toast</h2>
        <Button
          label="Show Toast"
          onClick={() => toast.current?.show({ severity: "info", summary: "Info", detail: "Message" })}
        />
      </section>

      <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <h2 style={{ width: "100%", margin: 0 }}>Message</h2>
        <Message severity="info" text="This is an info message." />
        <Message severity="info" text="Another message (inline style)." />
      </section>

      <section>
        <h2 style={{ width: "100%", margin: "0 0 16px 0" }}>ProgressBar</h2>
        <ProgressBar value={60} style={{ height: "8px" }} />
      </section>

      <section style={{ maxWidth: 300 }}>
        <h2 style={{ width: "100%", margin: "0 0 16px 0" }}>Slider</h2>
        <Slider
          value={sliderValue}
          onChange={(e) => setSliderValue(Array.isArray(e.value) ? e.value[0] : (e.value ?? 0))}
        />
      </section>

      <section>
        <h2 style={{ width: "100%", margin: "0 0 16px 0" }}>Calendar</h2>
        <Calendar value={dateValue} onChange={(e) => setDateValue(e.value ?? null)} showIcon />
      </section>

      <section style={{ maxWidth: 320 }}>
        <h2 style={{ width: "100%", margin: "0 0 16px 0" }}>Chips</h2>
        <Chips value={chipsValue} onChange={(e) => setChipsValue(e.value ?? [])} placeholder="Add item" />
      </section>
    </div>
  );
}
