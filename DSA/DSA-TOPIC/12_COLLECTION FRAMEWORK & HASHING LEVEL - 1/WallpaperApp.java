import javax.swing.*;
import java.awt.*;
import java.io.File;

public class WallpaperApp extends JFrame {

    private JLabel backgroundLabel;
    private JButton uploadButton;

    public WallpaperApp() {
        setTitle("Desktop Wallpaper App");
        setSize(1000, 700);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setLayout(new BorderLayout());

        uploadButton = new JButton("Upload Wallpaper");
        uploadButton.setFont(new Font("Arial", Font.BOLD, 16));

        JPanel topPanel = new JPanel();
        topPanel.add(uploadButton);

        backgroundLabel = new JLabel();
        backgroundLabel.setHorizontalAlignment(JLabel.CENTER);
        backgroundLabel.setVerticalAlignment(JLabel.CENTER);

        add(topPanel, BorderLayout.NORTH);
        add(backgroundLabel, BorderLayout.CENTER);

        uploadButton.addActionListener(e -> uploadImage());

        setVisible(true);
    }

    private void uploadImage() {
        JFileChooser chooser = new JFileChooser();

        int result = chooser.showOpenDialog(this);

        if (result == JFileChooser.APPROVE_OPTION) {
            File selectedFile = chooser.getSelectedFile();

            ImageIcon icon = new ImageIcon(selectedFile.getAbsolutePath());

            Image image = icon.getImage().getScaledInstance(
                    backgroundLabel.getWidth(),
                    backgroundLabel.getHeight(),
                    Image.SCALE_SMOOTH
            );

            backgroundLabel.setIcon(new ImageIcon(image));
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(WallpaperApp::new);
    }
}